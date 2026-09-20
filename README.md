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

## 部署

推送到 `main` 后由 GitHub Actions 自动构建并发布，无需本地打包产物：

```
push to main  →  .github/workflows/deploy.yml
                 ├─ build:  npm ci && npm run build  →  上传 dist/ 为 artifact
                 └─ deploy: 发布 artifact 到 GitHub Pages
```

- 线上地址：<https://qzcrane7021.github.io/>
- 手动触发：仓库 Actions → Deploy to GitHub Pages → Run workflow
- 查看进度：仓库 Actions 页面，或 `main` 上的 commit 状态标记

### 一次性设置

仓库 **Settings → Pages → Build and deployment → Source** 必须选择 **GitHub Actions**。
如果这里仍是 "Deploy from a branch"，`deploy-pages` 步骤会失败（报错类似 `Get Pages site failed`）。

### 注意事项

- `dist/` 是构建产物，已在 `.gitignore` 中，不要提交。
- 项目部署在域名根路径，因此 `vite.config.js` 中 `base: '/'`。**改动 `base` 前请确认与部署路径一致**，否则会出现资源 404。
- 若将来引入 `vue-router` 并启用 history 模式，相对/绝对路径的 `base` 都需要重新核对，直接刷新子路由会 404。
- 切换到 GitHub Actions 发布后，旧的 `gh-pages` 分支、`package.json` 里的 `deploy` 脚本和 `gh-pages` 依赖都不再被使用。确认 Actions 首次部署成功后，可以按需清理。


