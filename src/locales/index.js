/**
 * 多语言入口（vue-i18n）
 *
 * 约定：
 * - 每种语言对应一个 JSON 文件，文件名即语言代码（zh-CN.json / en-US.json ...）。
 *   新增文案时，请同步补齐所有语言文件里的同一个 key。
 * - 新增一门语言 = ① 复制 zh-CN.json 改名并翻译 → ② 在 SUPPORTED_LOCALES 追加一项。
 * - 语言优先级：URL 参数 ?lang=xx > localStorage > 浏览器语言 > DEFAULT_LOCALE。
 */
import { watch } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'

import zhCN from './zh-CN.json'
import zhTW from './zh-TW.json'
import enUS from './en-US.json'
import jaJP from './ja-JP.json'

/** 语言注册表：short 用于右上角切换按钮上的短标签 */
export const SUPPORTED_LOCALES = [
  { code: 'zh-CN', label: '简体中文', short: '简' },
  { code: 'zh-TW', label: '繁體中文', short: '繁' },
  { code: 'en-US', label: 'English', short: 'EN' },
  { code: 'ja-JP', label: '日本語', short: '日' },
]

/** 默认语言：也是其他语言缺 key 时的兜底语言 */
export const DEFAULT_LOCALE = 'zh-CN'

const STORAGE_KEY = 'qzcrane.locale'

const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en-US': enUS,
  'ja-JP': jaJP,
}

/** 把任意语言标签（如 en、en-GB、zh-Hant-TW）规整成注册表里的语言代码 */
function matchLocale(input) {
  if (typeof input !== 'string' || !input) return null

  const lower = input.trim().toLowerCase()
  const exact = SUPPORTED_LOCALES.find((item) => item.code.toLowerCase() === lower)
  if (exact) return exact.code

  // 逐级截断：zh-Hant-TW → zh-Hant → zh
  const segments = lower.split('-')
  while (segments.length > 1) {
    segments.pop()
    const prefix = segments.join('-')
    const matched = SUPPORTED_LOCALES.find((item) => item.code.toLowerCase().startsWith(prefix))
    if (matched) return matched.code
  }

  return null
}

function readStoredLocale() {
  try {
    return matchLocale(localStorage.getItem(STORAGE_KEY))
  } catch {
    // 隐私模式等场景下 localStorage 可能不可用
    return null
  }
}

function resolveLocale() {
  const fromUrl = matchLocale(new URLSearchParams(location.search).get('lang'))
  if (fromUrl) return fromUrl

  const fromStorage = readStoredLocale()
  if (fromStorage) return fromStorage

  const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const item of browserLocales) {
    const matched = matchLocale(item)
    if (matched) return matched
  }

  return DEFAULT_LOCALE
}

export const i18n = createI18n({
  // 组合式 API 模式；globalInjection 让模板里也能直接用 $t
  legacy: false,
  globalInjection: true,
  locale: resolveLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})

/** 切换语言：同步 i18n、localStorage、URL 与 <html lang> */
export function setLocale(code) {
  if (!SUPPORTED_LOCALES.some((item) => item.code === code)) return

  i18n.global.locale.value = code

  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // 忽略不可写入的情况，语言仅在本次会话生效
  }

  try {
    const url = new URL(location.href)
    url.searchParams.set('lang', code)
    history.replaceState(null, '', url)
  } catch {
    // 无法改写地址栏时忽略
  }
}

/** <html lang> 与标签页标题跟随语言变化 */
export function syncDocument() {
  document.documentElement.lang = i18n.global.locale.value
  document.title = i18n.global.t('meta.title')
}

watch(i18n.global.locale, syncDocument, { immediate: true })

/** 组件内使用的快捷写法：const { t, locale, locales, setLocale } = useLocale() */
export function useLocale() {
  const { t, locale } = useI18n({ useScope: 'global' })
  return { t, locale, locales: SUPPORTED_LOCALES, setLocale }
}
