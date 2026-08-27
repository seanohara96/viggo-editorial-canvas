import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Static SPA build: `npm run build` outputs a complete static site to ./dist
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
});
