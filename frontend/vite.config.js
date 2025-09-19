import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // 配置代理规则
    proxy: {
      // 匹配所有以 '/' 开头的请求
      '/api': {
        // 目标服务器地址
        target: 'http://localhost:5000',
        // 是否改变源地址
        changeOrigin: true,
        // 路径重写规则
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
