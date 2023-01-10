import { createStitches } from '@stitches/react';

export const {
	globalCss,
	theme, 
	styled, 
	config,
	getCssText,
	createTheme,
	keyframes,
	css

} = createStitches({
	theme : {
		colors: {
			white: '#fff',
 
			gray900: '#121214',
			gray800: '#202024',
			gray400: '#c4c4cc',
			gray100: '#e1e1e6',

			green500: '#00875f',
			green300: '#00b37e',
		}
	}
});