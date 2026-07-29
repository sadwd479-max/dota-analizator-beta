import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Конфигурация Vite с правильным базовым путем для GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/dota-analizator-beta/',
})
