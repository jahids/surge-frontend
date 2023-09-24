import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import VitePluginProxy from 'vite-plugin-proxy';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'http://192.168.68.51:4500',
  //   },
  // },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.68.56:5678', // Your backend server URL
        // target: 'http://localhost:4500',
        changeOrigin: true,
        // You can add other proxy options here if needed
        // For example, to rewrite the path:
        // pathRewrite: { '^/api': '' },
      },
    },
  },
});
