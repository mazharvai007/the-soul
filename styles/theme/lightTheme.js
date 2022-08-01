import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#41228e',
		},
		secondary: {
			main: '#2bfdff',
		},
		text: {
			main: '#4c4c4c',
			primary: '#41228e',
			secondary: '#2bfdff',
			white: '#ffffff',
			gray: '#eaeaea',
			dark: '#000',
			light: '#999999',
		},
		bodyColor: {
			main: '#fff',
		},
		iconColor: {
			main: '#c8d5ef',
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
		button: {
			fontFamily: 'Playfair Display, serif',
			fontSize: '15px',
			lineHeight: 1.5,
		},
		formText: {
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: 1.5,
			fontFamily: 'Roboto, sans-serif',
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
