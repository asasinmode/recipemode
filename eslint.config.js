// @ts-check
import antfu from '@antfu/eslint-config';
import unocss from '@unocss/eslint-config/flat';

export default antfu({
	stylistic: {
		semi: true,
		indent: 'tab',
	},
	rules: {
		'vue/return-in-computed-property': 'off',
		'style/brace-style': ['error', '1tbs'],
		'curly': ['error', 'all'],
	},
	formatters: true,
}, unocss);
