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
			{ text: 'recipes', link: '/recipes' },
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
					{ text: 'oatmeal raisin', link: 'oatmeal-raisin' },
					{ text: 'chocolate chip walnut', link: 'chocolate-chip-walnut' },
					{ text: 'coconut', link: 'coconut' },
				],
			},
			{
				text: 'cakes',
				collapsed: false,
				base: '/cakes/',
				items: [
					{ text: 'brownie', link: 'brownie' },
					{ text: 'cinnamon rolls', link: 'cinnamon-rolls' },
					{ text: 'white chocolate cheesecake', link: 'white-chocolate-cheesecake' },
					{ text: 'tres leches', link: 'tres-leches' },
					{ text: 'biscuit base', link: 'biscuit-base' },
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
			{
				text: 'desserts',
				collapsed: false,
				base: '/desserts/',
				items: [
					{ text: 'lemon/lime mousse', link: 'lemon-lime-mousse' },
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
