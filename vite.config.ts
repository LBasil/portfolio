import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Copies root-level static assets into dist/ after every build.
// Required because images/, videos/, and standalone HTML pages live at the project
// root (not in public/) so Vite never picks them up automatically.
function copyStaticAssets(): Plugin {
  return {
    name: 'copy-static-assets',
    apply: 'build',
    closeBundle() {
      for (const dir of ['images', 'videos']) {
        const src = resolve(__dirname, dir)
        if (existsSync(src)) {
          cpSync(src, resolve(__dirname, 'dist', dir), { recursive: true })
        }
      }
      // Standalone HTML pages that live outside the Vue SPA
      for (const file of ['universe.html']) {
        const src = resolve(__dirname, file)
        if (existsSync(src)) {
          cpSync(src, resolve(__dirname, 'dist', file))
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [
    vue({
      template: {
        // Prevent Vite from treating <source src="..."> as bundled module imports
        transformAssetUrls: { source: false }
      }
    }),
    copyStaticAssets()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
