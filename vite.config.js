import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Frontend-Mentor-20-Space-tourism-multi-page-website/',
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
