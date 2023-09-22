import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: 'Atkinson Hyperlegible',
			},
		}),
	],
	transformers: [
		transformerVariantGroup(),
	],
	safelist: ['font-sans'],
});
