import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/samco-plumbing/",
  plugins: [react()],
  server: { port: 3000 },
});
