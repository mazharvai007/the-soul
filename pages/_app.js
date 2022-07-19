import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from '../utility/createEmotionCache';
import { lightTheme } from '../styles/theme/lightTheme';
import '../styles/globals.css';

// Client-side cache, shared for whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
