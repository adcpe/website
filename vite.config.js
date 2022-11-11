import { fileURLToPath, URL } from 'node:url'
import { VitePluginFonts } from 'vite-plugin-fonts'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginFonts({
      families: [
        {
          name: 'IBM Plex Mono',
          styles: '400,600,700'
        },
        {
          name: 'IBM Plex Sans',
          styles: '400,600,700'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
