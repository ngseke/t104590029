import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import { minifyHtml } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS(),
    minifyHtml(),
  ],
  base: './',
})
