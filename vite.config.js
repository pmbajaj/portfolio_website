import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure correct MIME type for JavaScript files
    mimeTypes: {
      js: 'text/javascript',
    },
    // Additional settings for a better development experience
    port: 3000, // Change port if needed
    open: true, // Automatically open the app in the browser
  },
});

