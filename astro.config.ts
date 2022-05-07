import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://astro-forestry-starter.netlify.app",
  integrations: [react()],
});
