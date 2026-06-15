import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Dedicated port so `npm run dev` is always the same URL and never
    // collides with other local projects (e.g. one already on 5173).
    port: 3000,
    strictPort: true,
  },
})
