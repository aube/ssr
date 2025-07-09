import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
// import tailwindcss from '@tailwindcss/vite'

const base = '/'

// preserve this to test loading __filename & __dirname in ESM as Vite polyfills them.
// if Vite incorrectly load this file, node.js would error out.
globalThis.__vite_test_filename = __filename
globalThis.__vite_test_dirname = __dirname

export default defineConfig(({ command, ssrBuild, isSsrBuild }) => ({
  base,
  plugins: [
    vuePlugin(),
    // tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('.', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    },
  },
  experimental: {
    renderBuiltUrl(filename, { hostType, type, ssr }) {
      if (ssr && type === 'asset' && hostType === 'js') {
        return {
          runtime: `__ssr_vue_processAssetPath(${JSON.stringify(filename)})`,
        }
      }
    },
  },
  build: {
    minify: false,
  },
  ssr: {
    noExternal: [
      // this package has uncompiled .vue files
    ],
  },
  optimizeDeps: {
    // exclude: ['@vitejs/test-example-external-component'],
  },
}))
