# Homepage

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 多语言（i18n）

界面文案全部存放在 `src/locales/`，页面里不再出现写死的字符串。

| 文件 | 语言 |
| --- | --- |
| `src/locales/zh-CN.json` | 简体中文（原文，其余语言以它为基准翻译） |
| `src/locales/zh-TW.json` | 繁體中文 |
| `src/locales/en-US.json` | English |
| `src/locales/ja-JP.json` | 日本語 |

- `src/locales/index.js`：语言注册表（`SUPPORTED_LOCALES`）、语言检测与切换逻辑、`<html lang>` 与标签页标题同步。
- 语言优先级：URL 参数 `?lang=en-US` > `localStorage` > 浏览器语言 > 默认 `zh-CN`；右上角按钮可手动切换，选择会被记住。
- 新增文案：在所有语言文件中补齐同一个 key；漏翻时自动回退到 `zh-CN.json`。
- 新增一门语言：复制 `zh-CN.json` 改名并翻译，然后在 `SUPPORTED_LOCALES` 追加 `{ code, label, short }`。
- 社交/博客入口的文案 key 规则见 `src/App.vue` 顶部注释（`social.<id>`、`blog.<key>`）。

