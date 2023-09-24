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
				text: 'dinners',
				collapsed: true,
				base: '/dinners/',
				items: [
					{ text: 'butter chicken', link: 'butter-chicken' },
					{ text: 'calzones', link: 'calzones' },
					{ text: 'chili', link: 'chili' },
					{ text: 'egg fried rice', link: 'egg-fried-rice' },
					{ text: 'keema matar', link: 'keema-matar' },
					{ text: 'orange chicken', link: 'orange-chicken' },
					{ text: 'pizza dough', link: 'pizza-dough' },
					{ text: 'tomato sauce', link: 'tomato-sauce' },
				],
			},
			{
				text: 'cookies',
				collapsed: true,
				base: '/cookies/',
				items: [
					{ text: 'coconut', link: 'coconut' },
					{ text: 'chocolate chip walnut', link: 'chocolate-chip-walnut' },
					{ text: 'oatmeal raisin', link: 'oatmeal-raisin' },
				],
			},
			{
				text: 'cakes',
				collapsed: true,
				base: '/cakes/',
				items: [
					{ text: 'banana bread', link: 'banana-bread' },
					{ text: 'biscuit base', link: 'biscuit-base' },
					{ text: 'brownie', link: 'brownie' },
					{ text: 'cinnamon rolls', link: 'cinnamon-rolls' },
					{ text: 'lemon tart', link: 'lemon-tart' },
					{ text: 'tres leches', link: 'tres-leches' },
					{ text: 'white chocolate cheesecake', link: 'white-chocolate-cheesecake' },
				],
			},
			{
				text: 'desserts',
				collapsed: true,
				base: '/desserts/',
				items: [
					{ text: 'creme brulee', link: 'creme-brulee' },
					{ text: 'lemon/lime mousse', link: 'lemon-lime-mousse' },
					{ text: 'panna cotta', link: 'panna-cotta' },
				],
			},
			{
				text: 'macarons',
				collapsed: true,
				base: '/macarons/',
				items: [
					{ text: 'base', link: 'base' },
					{ text: 'caramel sauce', link: 'caramel-sauce' },
					{ text: 'chocolate ganache', link: 'chocolate-ganache' },
					{ text: 'mascarpone whipped cream', link: 'mascarpone-whipped-cream' },
					{ text: 'white chocolate whipped cream', link: 'white-chocolate-whipped-cream' },
				],
			},
		],
	},

	vite: {
		plugins: [
			Unocss(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
		],
	},

	vue: {
		script: {
			defineModel: true,
		},
	},
});
