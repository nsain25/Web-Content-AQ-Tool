import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Web-Content-AQ-Tool/', // Ensure it matches EXACTLY with your repo name
});
