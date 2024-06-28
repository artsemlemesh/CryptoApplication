import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
    outDir: 'build',
  },
  server: {
    port:3004,
    strictPort: true,
  },
  
  // server: {
  //   port: 3004,
  //   strictPort: true,
  //   host: true,
  //   origin: 'http://0.0.0.0:3004'
  
  // },
})
