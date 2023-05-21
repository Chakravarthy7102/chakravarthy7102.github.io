import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:"https://chakravarthy7102.github.io",
  base:"/devchaks",
  integrations: [tailwind()]
});