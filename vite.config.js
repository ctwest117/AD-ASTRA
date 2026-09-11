import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        missions: fileURLToPath(new URL('./missions.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
      },
    },
  },
})
