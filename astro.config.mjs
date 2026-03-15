// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://brunogamb.github.io/aximple/',
    base: '/aximple/',
    image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});


