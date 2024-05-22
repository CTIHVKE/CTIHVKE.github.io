import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 假设你的子文件夹名为 "gb"
const basePath = '/gb/'

// https://vitejs.dev/config/
export default defineConfig({
  base:basePath,// 设置子文件夹路径
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
