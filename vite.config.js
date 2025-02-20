import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: {
    
        lossless: true,
    
      },
      avif: {
    
        lossless: true,
       
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 40,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Set the chunk size warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});

