import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": path.resolve("./src")
    }
  },
  build:{
    rollupOptions:{
     output:{
      manualChunks:{
        elementPlus:['element-plus']
      }
     }
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        javascriptEnabled:true,
        additionalData:'@import "./src/styles/variable.scss";'
      }
    }
  }
})
