import { useState, useEffect } from 'react';

const Splash = () => {
	const [text, setText] = useState('Hello, my name is Adnan');

	return (
		<div className="flex h-screen flex-col items-center justify-center text-center font-almamono text-7xl text-white">
			<div className="z-30 flex flex-col items-center justify-center gap-6">
				<h1>{text}</h1>
				<h2 className="text-3xl">and I am a software engineer</h2>
			</div>
		</div>
	);
};

export default Splash;
