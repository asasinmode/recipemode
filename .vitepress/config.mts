import { fileURLToPath } from 'node:url';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'recipemode',
	lang: 'en-US',
	description: 'my cooking recipes',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'icon', href: '/favicon_dark.ico', media: '(prefers-color-scheme: dark)' }],
		['link', { rel: 'mask-icon', href: '/favicon_mask.svg', color: '#000000' }],
	],

	themeConfig: {
		nav: [
			{ text: 'home', link: '/' },
			{ text: 'recipes', link: '/cookies/' },
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/asasinmode/recipemode' },
			{ icon: 'x', link: 'https://twitter.com/asasinmode' },
		],
	},

	vite: {
		plugins: [
			Unocss(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
		],
	},
});
