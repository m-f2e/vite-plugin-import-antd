import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginImportAntd } from '../src/index.ts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePluginImportAntd(),
  ],
})
