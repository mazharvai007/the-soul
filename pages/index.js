import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

export default function Home({ children }) {
	return (
		<>
			<Head>
				<title>The Soul</title>
				<meta
					name='description'
					content='The Soul is a personal portfolio app'
				/>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Header />
			<Hero />
		</>
	);
}
