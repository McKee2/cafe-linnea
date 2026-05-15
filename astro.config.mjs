// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cafelinnea.vortix.se',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  /* Built-in Fonts API — self-hosted Fraunces (display) and Geist (body) */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      weights: [300, 400, 500, 600],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [400, 500],
    },
  ],

  /* Built-in CSP */
  csp: true,
});
