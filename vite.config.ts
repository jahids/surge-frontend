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
        target: 'http://192.168.68.51:4500', // Your backend server URL
        changeOrigin: true,
        // You can add other proxy options here if needed
        // For example, to rewrite the path:
        // pathRewrite: { '^/api': '' },
      },
    },
  },
});
