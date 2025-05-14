import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000, // Port for the frontend (React app)
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend URL
        changeOrigin: true, // Adjusts the origin header to match the target URL
        secure: false, // Disable SSL verification for local development
      },
    },
  },
});
