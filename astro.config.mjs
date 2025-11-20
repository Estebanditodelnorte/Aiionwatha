// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.aiionwatha.com',
	integrations: [
		sitemap({
			filter: (page) => {
				// Include all localized pages; keep both / and /en/.
				return true;
			}
		})
	],
	trailingSlash: 'never'
});
