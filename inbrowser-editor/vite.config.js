import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tailwind_animated from "tailwindcss-animated";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tailwind_animated],
});
