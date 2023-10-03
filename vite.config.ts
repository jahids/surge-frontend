/* eslint-disable  */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
// import VitePluginProxy from 'vite-plugin-proxy';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'surge',
    short_name: 'Surge',
    description: 'An app that can manage Expnese and Income',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/maskable_icon.png',
        sizes: '225x225',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#171717',
    background_color: '#e8ebf2',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'http://192.168.68.51:4500',
  //   },
  // },
  plugins: [react(), VitePWA(manifestForPlugin)],
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
