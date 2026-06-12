import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'img'),
    },
  },
  publicDir: 'public',
  // Copy project /img into dist on build (in addition to public/)
  build: {
    copyPublicDir: true,
  },
})
