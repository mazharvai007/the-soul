import Head from 'next/head';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services/Services';
import Skills from '../components/Skills/Skills';

export default function Home({ children }) {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Education />
			<Services />
			<Portfolio />
		</>
	);
}
