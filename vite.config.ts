import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        // Автоматический импорт глобальных файлов
        additionalData: `
          @import "./src/styles/variables.scss";
          @import "./src/styles/mixins.scss";
        `,
      },
    },
    modules: {
      // Настройка CSS Modules
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]--[hash:base64:5]",
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: "0.0.0.0", // Важно для доступа из контейнера
    port: 5173,
    watch: {
      usePolling: true, // Для Docker на Windows/Mac
    },
    hmr: {
      clientPort: 5173, // Для правильного WebSocket
    },
  },
});
