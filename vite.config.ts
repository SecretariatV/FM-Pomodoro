import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3333,
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@components": "/src/components",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
    test: {
      environment: "jsdom",
      setupFiles: "./src/setup-tests.ts",
      exclude: ["node_modules", "cypress", "dist"],
    },
    base: "/FM-Pomodoro/",
  };
});
