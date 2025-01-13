import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Pizzeria",
  plugins: [react()],
  /*   server: {
    historyApiFallback: true, // Redirige todas las rutas al index.html
  }, */
});
