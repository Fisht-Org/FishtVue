import { fileURLToPath, URL } from "node:url"

// @ts-ignore
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      fishtvue: fileURLToPath(new URL("./lib", import.meta.url))
    }
  }
})
