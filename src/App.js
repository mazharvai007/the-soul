import { CssBaseline } from '@mui/material';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Header />
			<Hero />
			<About />
		</div>
	);
}

export default App;
