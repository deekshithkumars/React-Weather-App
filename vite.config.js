import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mini-project-react/', // Use the exact name of your repository here
});

// https://vitejs.dev/config