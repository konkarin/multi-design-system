import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@packages": fileURLToPath(new URL("../", import.meta.url)),
    },
  },
  server: {
    port: 4000,
  },
});
