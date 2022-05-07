import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
  site: "https://astro-forestry-starter.netlify.app",
  integrations: [react(), turbolinks()],
});
