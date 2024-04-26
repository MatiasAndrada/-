import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["https://images2.imgbox.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [tailwind(), react()],
});
