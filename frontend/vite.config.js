import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',  // Ensures it's accessible on localhost
    port: 3000,         // Runs the dev server on port 3000
    open: true,         // Optionally open the browser automatically
  },
})
