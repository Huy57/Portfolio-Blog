import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Cho phép truy cập từ external IP
  },
  preview: {
    port: 3000,
    host: true, // Cho phép truy cập từ external IP cho preview mode
  },
})