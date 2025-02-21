import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // ✅ Set base to '/' for Vercel
  assetsInclude: ['**/*.png', '**/*.PNG'], // ✅ Fix PNG Import Issue
});
