import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { visualizer } from 'rollup-plugin-visualizer';


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
     visualizer({
      open: true,          // Automatically opens visual report in browser
      filename: 'dist/stats.html', // Optional: output filename
      gzipSize: true,
      brotliSize: true,
    }),
  ],
 build: {
    chunkSizeWarningLimit: 1500, // Warning limit in kB
    assetsInlineLimit: 4096,     // Inline assets under 4KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.toString().split('node_modules/')[1].split('/');
            const name = parts[0].startsWith('@')
              ? `${parts[0]}/${parts[1]}`
              : parts[0];
            return name;
          }
        },
      },
    },
  },
});

