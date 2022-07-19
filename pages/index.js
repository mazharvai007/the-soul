import Head from 'next/head';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';

export default function Home({ children }) {
	return (
		<>
			<Head>
				<title>The Soul</title>
			</Head>
			<Header />
			<Hero />
			<About />
			<Skills />
		</>
	);
}
