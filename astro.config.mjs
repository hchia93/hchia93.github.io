import { defineConfig } from 'astro/config';

// Root user-site: served at https://hchia93.github.io, no base path.
export default defineConfig({
  site: 'https://hchia93.github.io',
  devToolbar: { enabled: false },
});
