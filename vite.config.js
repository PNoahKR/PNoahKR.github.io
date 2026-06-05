import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fashionmall: resolve(__dirname, "fashionmall.html"),
        matchMeal: resolve(__dirname, "match-meal.html"),
        peekle: resolve(__dirname, "peekle.html"),
        thanksCarbon: resolve(__dirname, "thanks-carbon.html"),
      },
    },
  },
});
