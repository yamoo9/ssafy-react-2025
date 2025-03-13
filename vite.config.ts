import { defineConfig } from 'vite'

const viteConfig = defineConfig({
  // dev server
  server: {
    port: 3000,
  },
  // preview server
  preview: {
    port: 3010,
  },
})

export default viteConfig
