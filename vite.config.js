import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Jijo/',  // ✅ Ensure correct base for GitHub Pages
  assetsInclude: ['**/*.png', '**/*.PNG'],  // ✅ Fix PNG Import Issue
});
