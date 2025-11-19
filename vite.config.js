import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ink-against-the-wind/",   // <-- add this
  plugins: [react()],
});
