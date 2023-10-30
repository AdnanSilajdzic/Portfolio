import { useState, useEffect } from 'react';

import Splash from './components/Splash';
import Blob from './components/Blob';
import Loading from './components/Loading';
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import MagicText from './components/MagicText';
import ContactMe from './components/ContactMe';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);
	return (
		<div>
			<Blob />
			{isLoading ? (
				<Loading />
			) : (
				<div className="flex flex-col">
					<Splash />
					<Navigation />
					<AboutMe />
					<Projects />
					<div className="mb-44 mt-36 flex justify-end">
						<ContactMe />
					</div>
					<div className="flex w-full justify-center text-center">
						<p className="z-30 mb-2 cursor-pointer place-self-center self-center font-almamonoLight text-sm text-white">
							Want to see how I made this page? It's on{' '}
							<a
								href="https://github.com/AdnanSilajdzic/Portfolio"
								className="font-bold underline"
							>
								GitHub
							</a>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
