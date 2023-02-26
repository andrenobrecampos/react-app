import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  server: {
    // https://stackoverflow.com/questions/68595151/unable-to-dockerize-vite-react-typescript-project/68595302#68595302
    host: "0.0.0.0",
    port: 3000,
  },
});
