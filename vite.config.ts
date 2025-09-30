import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Public path URL when served in development or production environments.
const base = process.env.VITE_BASE ?? "";

const css = {
  devSourcemap: true,
};
const plugins = [react()];
const resolve = {
  // Imports resolve with @/etc as file path
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@assets": path.resolve(__dirname, "./src/assets"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@constants": path.resolve(__dirname, "./src/constants"),
    "@hooks": path.resolve(__dirname, "./src/hooks"),
    "@lib": path.resolve(__dirname, "./src/lib"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@routes": path.resolve(__dirname, "./src/routes"),
    "@store": path.resolve(__dirname, "./src/store"),
    "@styles": path.resolve(__dirname, "./src/store"),
    "@utils": path.resolve(__dirname, "./src/utils"),
  },
};
const server = {
  // Automatically opens Dev Environment in a new browser menu
  open: true,
};

export default defineConfig({
  base,
  css,
  plugins,
  resolve,
  server,
});
