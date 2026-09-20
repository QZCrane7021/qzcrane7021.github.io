<script setup>
import { useLocale } from './locales'

/**
 * 链接数据集中维护：这里只放「数据」，界面文案一律取自 src/locales/*.json。
 * - 新增社交平台 → 在 socialLinks 追加一项；在各语言文件的 social.<id> 补文案；
 *   在下方样式的「品牌色」处补一条同名修饰类。
 * - 新增博客分支 → 在 blogLinks 追加一项；在各语言文件按 labelKey 补文案。
 */
const { t, locale, locales, setLocale } = useLocale()

const socialLinks = [
  {
    id: 'bilibili',
    icon: '/icon/bilibili.svg',
    url: 'https://space.bilibili.com/3546929734617957',
  },
  {
    id: 'rednote',
    icon: '/icon/rednote.svg',
    url: 'https://www.xiaohongshu.com/user/profile/66a3a413000000001d020705',
  },
  {
    id: 'tiktok-cn',
    icon: '/icon/tiktok-cn.svg',
    url: 'https://www.douyin.com/user/MS4wLjABAAAAg5FHrcGVIljHeNrGK5iqFFktG5tpEWJbratAPrUo8jU_ysyPNnqEpZnxDInuTpJD',
  },
  {
    id: 'kuaishou',
    icon: '/icon/kuaishou.svg',
    url: 'https://www.kuaishou.com/profile/3x8ahu54az7n7sm',
  },
  {
    id: 'discord',
    icon: '/icon/discord.svg',
    url: 'https://discord.com/users/1120181808617750589',
  },
  {
    id: 'github',
    icon: '/icon/github.svg',
    url: 'https://github.com/QZCrane7021',
  },
]

const blogLinks = [
  {
    labelKey: 'blog.translationToolsWiki',
    url: 'https://qzcrane7021.github.io/TranslationToolsWiki/',
  },
  // { labelKey: 'blog.essayDigest', url: '' },
  // { labelKey: 'blog.smallTricks', url: '' },
]
</script>

<template>
  <div class="page">
    <img class="page__wallpaper" src="/img/wallpaper.png" alt="" />

    <!-- 右上角：语言切换（绝对定位，不参与上下分栏） -->
    <nav class="lang" :aria-label="t('languageSwitcher.label')">
      <button
        v-for="item in locales"
        :key="item.code"
        class="lang__button"
        :class="{ 'lang__button--active': item.code === locale }"
        type="button"
        :lang="item.code"
        :title="item.label"
        :aria-pressed="item.code === locale"
        @click="setLocale(item.code)"
      >
        {{ item.short }}
      </button>
    </nav>

    <!-- 上半区：头像与昵称 -->
    <header class="profile">
      <img class="profile__avatar" src="/img/avatar.png" :alt="t('profile.avatarAlt')" />
      <p class="profile__name">{{ t('profile.name') }}</p>
      <p class="profile__moto">{{ t('profile.motto') }}</p>
    </header>

    <!-- 下半区：社交与博客入口 -->
    <nav class="links">
      <section class="links__group">
        <p class="links__title">{{ t('links.others') }}</p>
        <ul class="social-list">
          <li v-for="link in socialLinks" :key="link.id">
            <a
              class="social-button"
              :class="`social-button--${link.id}`"
              :href="link.url"
              target="_blank"
              rel="noopener"
            >
              <img class="social-button__icon" :src="link.icon" :alt="t(`social.${link.id}`)" />
            </a>
          </li>
        </ul>
      </section>

      <section class="links__group">
        <p class="links__title">{{ t('links.blogs') }}</p>
        <ul class="blog-list">
          <li v-for="link in blogLinks" :key="link.labelKey">
            <a class="blog-link" :href="link.url" target="_blank" rel="noopener">
              {{ t(link.labelKey) }}
            </a>
          </li>
        </ul>
      </section>
    </nav>
  </div>
</template>

<style scoped>
/* =============================================================================
 * 1. 设计令牌与页面级布局
 *    所有尺寸/颜色集中在这里定义，改版时只需调整这一段
 * ========================================================================== */
.page {
  --avatar-size: min(30vw, 30vh);
  --social-size: 5vh;
  --social-icon-size: 60%;
  --social-gap: 0.5vw;
  --group-gap: 5vh;
  --brand-color: rgb(0 0 0 / 50%);
  --text-shadow: 0 0 0.2em rgb(0 0 0);

  /* 用 grid 直接划分上下两栏，替代 top: 50% 之类的魔法定位 */
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
}

.page__wallpaper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* =============================================================================
 * 2. 文本通用样式
 *    颜色/字重/阴影统一继承，字号由各元素按需定义
 * ========================================================================== */
.profile,
.links {
  color: #fff;
  font-weight: 700;
  text-shadow: var(--text-shadow);
}

/* =============================================================================
 * 3. 上半区：头像与昵称
 * ========================================================================== */
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile__avatar {
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
}

.profile__name {
  margin: 0.1em 0 0;
  font-size: 5vh;
}

/* 以下用相对定位做视觉微调：只影响自身，不改变后续元素的排版 */

.profile__moto {
  position: relative;
  top: 0em;
  margin: 0;
  font-size: 2vh;
}

/* =============================================================================
 * 4. 下半区：链接面板
 * ========================================================================== */
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: var(--group-gap);
}

.links__group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links__title {
  margin: 0 0 0.1em;
  font-size: 3vh;
}

/* 两个列表共用：横排、居中，并清掉 ul 的默认样式 */
.social-list,
.blog-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5vh 0;
  padding: 0;
  list-style: none;
}

.social-list {
  column-gap: var(--social-gap);
}

.blog-list {
  column-gap: 1em;
  font-size: 2vh;
}

/* ---- 4.1 社交按钮：品牌色通过 --brand-color 变量注入 ---- */
.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--social-size);
  height: var(--social-size);
  border-radius: 50%;
  background-color: var(--brand-color);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  transition:
    transform 0.15s ease,
    filter 0.15s ease;
}

.social-button:hover {
  transform: scale(1.08);
  filter: brightness(1.15);
}

.social-button:active {
  transform: scale(0.96);
}

.social-button:focus-visible {
  outline: 2px solid rgb(255 255 255 / 80%);
  outline-offset: 2px;
}

/* 边缘玻璃质感：径向遮罩让模糊从中心向外过渡 */
.social-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  backdrop-filter: blur(0.01px);
  -webkit-backdrop-filter: blur(0.01px);
  mask-image: radial-gradient(circle, transparent 0%, black 100%);
  -webkit-mask-image: radial-gradient(circle, transparent 0%, black 100%);
  z-index: -1;
}

.social-button__icon {
  width: var(--social-icon-size);
  height: var(--social-icon-size);
}

/* ---- 4.2 品牌色：新增平台时补一条，类名与 socialLinks[].id 对应 ---- */
.social-button--bilibili {
  --brand-color: rgb(251 114 153 / 50%);
}

.social-button--rednote {
  --brand-color: rgb(255 37 63 / 50%);
}

.social-button--tiktok-cn {
  --brand-color: rgb(0 0 0 / 50%);
}

.social-button--kuaishou {
  --brand-color: rgb(255 73 6 / 50%);
}

.social-button--discord {
  --brand-color: rgb(89 102 242 / 50%);
}

.social-button--github {
  --brand-color: rgb(0 0 0 / 50%);
}

/* ---- 4.3 博客链接 ---- */
.blog-link {
  margin-inline: 0.5em;
  color: inherit;
}

/* =============================================================================
 * 5. 右上角语言切换
 *    绝对定位脱离 grid 流，不会占用上下两栏的排版位置
 * ========================================================================== */
.lang {
  position: absolute;
  top: max(1.5vh, 0.75rem);
  right: max(1.5vw, 0.75rem);
  display: flex;
  align-items: center;
  gap: 0.2em;
  padding: 0.25em;
  border-radius: 999px;
  background-color: rgb(0 0 0 / 30%);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: #fff;
  text-shadow: var(--text-shadow);
}

.lang__button {
  min-width: 2em;
  padding: 0.25em 0.5em;
  border: 0;
  border-radius: 999px;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: max(0.7rem, 1.4vh);
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.lang__button:hover {
  background-color: rgb(255 255 255 / 20%);
}

.lang__button:focus-visible {
  outline: 2px solid rgb(255 255 255 / 80%);
  outline-offset: 2px;
}

/* 当前语言：反白突出 */
.lang__button--active {
  background-color: rgb(255 255 255 / 85%);
  color: rgb(0 0 0 / 80%);
  text-shadow: none;
}

.lang__button--active:hover {
  background-color: #fff;
}
</style>
