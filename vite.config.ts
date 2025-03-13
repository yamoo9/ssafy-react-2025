import { defineConfig } from 'vite'

const viteConfig = defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  preview: {
    port: 3010,
  },
})

export default viteConfig
