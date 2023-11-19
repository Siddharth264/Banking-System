import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://banking-system-mm29qt0ja-siddharth264.vercel.app",
        secure: false,
      },
    },
  },
});
