import { defineConfig } from 'windicss/helpers';
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import formsPlugin from 'windicss/plugin/forms';
import typographyPlugin from 'windicss/plugin/typography';

import { shortcuts } from './src/lib/styles/shortcuts';

export default defineConfig({
	attributify: true,
	darkMode: 'class',
	shortcuts,
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', 'sans-serif']
			}
		}
	},
	plugins: [aspectRatioPlugin, formsPlugin, typographyPlugin()]
});
