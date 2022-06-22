import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#41228e',
		},
		secondary: {
			main: '#2bfdff',
		},
		textColor: {
			main: '#4c4c4c',
			white: '#ffffff',
			gray: '#eaeaea',
			dark: '#000',
			light: '#999999',
		},
		bodyColor: {
			main: '#fff',
		},
	},
	typography: {
		fontFamily: 'Roboto, Playfair Display',
		body1: {
			lineHeight: 1.2,
			fontSize: '15px',
			fontFamily: 'Roboto, sans-serif',
		},
		body2: {
			fontWeight: 400,
			fontSize: '15px',
			lineHeight: 1.8,
			fontFamily: 'Roboto, sans-serif',
		},
		h1: {
			lineHeight: 1.2,
			fontSize: '80px',
			fontFamily: 'Playfair Display, serif',
		},
		h2: {
			lineHeight: 1.2,
			fontSize: '60px',
			fontFamily: 'Playfair Display, serif',
		},
		h3: {
			lineHeight: 1.2,
			fontSize: '40px',
			fontFamily: 'Playfair Display, serif',
		},
		h4: {
			lineHeight: 1.2,
			fontSize: '22px',
			fontFamily: 'Playfair Display, serif',
		},
		h5: {
			lineHeight: 1.2,
			fontSize: '18px',
			fontFamily: 'Playfair Display, serif',
		},
		h6: {
			lineHeight: 1.2,
			fontSize: '14px',
			fontFamily: 'Playfair Display, serif',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});
