import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
