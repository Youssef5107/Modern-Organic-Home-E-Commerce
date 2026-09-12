import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "https://modern-organic-home-e-commerce-1.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
