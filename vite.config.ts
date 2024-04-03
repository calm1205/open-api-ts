import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9999,
    //   proxy: {
    //     "/api/": {
    //       target: "http://local1.clm.localhost:3000/api/",
    //       changeOrigin: true,
    //     },
    //   },
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
