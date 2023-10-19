import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Blob from './components/Blob';
import Loading from './components/Loading';

function App() {
	const [showSplash, setShowSplash] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowSplash(true);
		}, 3000);
	}, []);
	return (
		<div>
			<Blob />
			{showSplash ? <Splash /> : <Loading />}
		</div>
	);
}

export default App;
