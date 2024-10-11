// @ts-check
import { defineConfig } from "astro/config";

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
});