import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    assetsDir: 'assets',
    cssCodeSplit: false, // 是否拆分css, 默认按模块拆分
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js', // 指定代码分割文件输出路径
        entryFileNames: 'assets/js/[name]-[hash].js', // 指定入口文件输出路径
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]' // 静态文件分类输出
      }
    },
  }
})
