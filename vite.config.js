import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
// loadEnv(mode, process.cwd(), "");
  plugins: [react()],
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
})
