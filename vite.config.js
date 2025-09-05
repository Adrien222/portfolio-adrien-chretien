import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Configuration pour React Router
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: 4173,
    open: true,
    cors: true,
  },
})