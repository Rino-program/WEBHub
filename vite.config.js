import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/WEBHub/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
