import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core - rarely changes
          'react-vendor': ['react', 'react-dom', 'react-router'],
          
          // Leaflet - large, used only on the map - changes rarely
          'leaflet-vendor': ['leaflet', 'react-leaflet'],
          
          // UI components - Radix UI - changes rarely
          'ui-vendor': [
            '@radix-ui/react-select',
            '@radix-ui/react-popover',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot'
          ],
          
          // React Query - server state management - changes rarely
          'query-vendor': ['@tanstack/react-query'],
          
          // Utilities - less often changes
          'utils-vendor': ['date-fns', 'nuqs', 'sonner', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Increase limit to avoid warnings
  },
});
