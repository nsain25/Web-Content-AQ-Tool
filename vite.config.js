import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Web-Content-AQ-Tool/", // Ensure correct base path for GitHub Pages
  plugins: [react()], // Correctly formatted plugins array
});
