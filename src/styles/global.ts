import {globalCss } from '@stitches/react';

export const globalStyle = globalCss({
	'*':{
		margin: 0,
		padding: 0,
		boxSizing: 'border-box' ,
	},

	body: {
		backgroundColor: '$gray900' ,
		color: '$gray100',
		'-webkit-font-smoothing': 'antialiased',
		
	},

	'body, textarea, button, input' :{
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 400,
	},

	'button, a': {
		cursor: 'pointer'
	}

});