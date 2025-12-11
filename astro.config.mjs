import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  alias: {
    "@": path.resolve("./src"),            // <--- alias principal
    components: path.resolve("./src/components"),
    assets: path.resolve("./src/assets"),
    lib: path.resolve("./src/lib"),
    styles: path.resolve("./src/styles"),
    public: path.resolve("./public"),
  },
});
