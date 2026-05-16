import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/chordle/', // making this change explicit brh
  plugins: [react()],
  build: {
    outDir: "docs"
  }
})
