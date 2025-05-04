import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    allowedHosts: [
      "36a44698-7e7c-46d7-86e1-5196e8b9b3d9-00-1mk0meka16wwk.pike.replit.dev"
    ]
  },
})
