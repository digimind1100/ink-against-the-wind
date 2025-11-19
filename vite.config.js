import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ink-against-the-wind/", // important for GitHub Pages
  plugins: [react()],
});
