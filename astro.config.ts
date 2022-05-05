import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://next-version-one.netlify.app/",
  integrations: [react()],
});
