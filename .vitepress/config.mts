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
		['link', { rel: 'mask-icon', href: '/cupcake.svg', color: '#000000' }],
	],

	themeConfig: {
		logo: '/logo.webp',
		nav: [
			{ text: 'home', link: '/' },
			{ text: 'recipes', link: '/cookies/macarons' },
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/asasinmode/recipemode' },
			{ icon: 'x', link: 'https://twitter.com/asasinmode' },
		],

		sidebar: [
			{
				text: 'cookies',
				collapsed: false,
				base: '/cookies/',
				items: [
					{ text: 'macarons', link: 'macarons' },
				],
			},
			{
				text: 'cakes',
				collapsed: false,
				base: '/cakes/',
				items: [
					{ text: 'tres leches', link: 'tres-leches' },
				],
			},
			{
				text: 'dinners',
				collapsed: false,
				base: '/dinners/',
				items: [
					{ text: 'egg fried rice', link: 'egg-fried-rice' },
				],
			},
		],
	},

	vite: {
		plugins: [
			Unocss(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
		],
	},
});
