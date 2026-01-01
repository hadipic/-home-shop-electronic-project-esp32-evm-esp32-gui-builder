import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/-home-shop-electronic-project-esp32-evm-esp32-gui-builder/',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
      // بقیه aliasها را موقتاً حذف می‌کنیم
    }
  },
  
  plugins: [vue()],
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    
    rollupOptions: {
      external: [
        'opentype.js',
        'lvgl',
        'lv_font_conv'
      ],
      
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'element-plus']
        }
      }
    }
  },
  
  optimizeDeps: {
    exclude: ['opentype.js', 'lvgl', 'lv_font_conv']
  }
})
