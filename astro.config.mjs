// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://aiionwatha.com',
	integrations: [
		sitemap({
			filter: (page) => {
				return !page.endsWith('/404/');
			}
		})
	],
	trailingSlash: 'always'
});
