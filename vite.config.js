import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ['legal-grapes-sleep.loca.lt'],
  },
  base: process.env.VITE_BASE_PATH || "Ananya-Tej-Portfolio",
})
