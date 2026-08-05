import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'   // 引入 Node.js 的 path 模块

export default defineConfig({
  plugins: [vue()],
  base: '/my-portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')   // 明确将 @ 指向 src 文件夹
    }
  }
})