import { fileURLToPath } from 'node:url';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'recipemode',
	description: 'my cooking recipes',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/asasinmode/recipemode' },
		],
	},

	vite: {
		plugins: [
			Unocss(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
		],
	},
});
