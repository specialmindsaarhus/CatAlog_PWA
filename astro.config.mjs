// @ts-check
import { defineConfig } from "astro/config";

import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
    // ... other config options ...
    vite: {
        build: {
            rollupOptions: {
                input: {
                    app: "./src/pages/index.astro",
                    "service-worker": "./public/service-worker.js",
                },
            },
        },
    },
    integrations: [
        AstroPWA({
          manifest: {
            name: "My Cat PWA",
            short_name: "Cat PWA",
            description: "Til alle katteelskere",
            start_url: "/",
            display: "standalone",
            background_color: "#ffffff",
            theme_color: "#000000",
            icons: [
              {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any maskable"
              },
              {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable"
              }
            ]
          },
          registerType: 'autoUpdate',
          workbox: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico}']
          },
          devOptions: {
            enabled: true
          }
        })
      ]
});