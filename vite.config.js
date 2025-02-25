import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Web-Content-AQ-Tool/",  // Set this to your repo name
});
