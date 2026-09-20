import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 用户主页仓库（<user>.github.io）部署在域名根路径
  base: '/',
})
