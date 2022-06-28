import { CssBaseline } from '@mui/material';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Header />
			<Hero />
			<About />
			<Skills />
		</div>
	);
}

export default App;
