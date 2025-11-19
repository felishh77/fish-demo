import { defineConfig } from 'astro/config';
import AstroFish from "./astro-fish.theme.ts";

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',  // required, replace with your site
    integrations: [
        AstroFish,
    ],
});
