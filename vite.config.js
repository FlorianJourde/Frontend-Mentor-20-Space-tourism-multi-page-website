import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: [
          [
            "@emotion",
            {
              "sourceMap": true,
              "autoLabel": "always",
              "labelFormat": "[filename]-[local]",
              "cssPropOptimization": true
            }
          ]
        ]
      }
    }
  )],
  base: '/Frontend-Mentor-20-Space-tourism-multi-page-website/',
})
