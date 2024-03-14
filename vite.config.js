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
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 静态文件分类输出
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // 将所有从node_modules引入的模块打包到名为vendor的代码块中
          }
        }
      }
    },
    chunkSizeWarningLimit: 2000 // 将打包块的警告阈值设置为1000KB
  }
})
