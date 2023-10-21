import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Blob from './components/Blob';
import Loading from './components/Loading';
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';
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
				<div className=" flex flex-col">
					<Splash />
					<Navigation />
					<AboutMe />
					<div className="h-[200px]"></div>
				</div>
			)}
		</div>
	);
}

export default App;
