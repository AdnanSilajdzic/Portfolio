import { useState, useEffect } from 'react';
import BinaryTextEffect from '../functions/BinaryTextEffect';
import TypingTextEffect from '../functions/TypingTextEffect';

const Splash = () => {
	const [trueText, setTrueText] = useState('Hi, my name is Adnan');
	const [text, setText] = useState('');

	const [trueSubText, setTrueSubText] = useState(
		'and I am a software engineer'
	);
	const [subText, setSubText] = useState('');

	const typingTop = () => {
		let i = -1;
		const intervalId = setInterval(async () => {
			i++;
			if (i <= trueText.length) {
				setText(BinaryTextEffect(trueText, i));
			} else {
				clearInterval(intervalId); // Stop the interval when all elements are processed
			}
		}, 70);
	};
	const typingBottom = () => {
		let j = -1;
		const intervalId = setInterval(async () => {
			j++;
			if (j <= trueSubText.length) {
				setSubText(BinaryTextEffect(trueSubText, j));
			} else {
				clearInterval(intervalId); // Stop the interval when all elements are processed
			}
		}, 70);
	};

	useEffect(() => {
		setSubText(BinaryTextEffect(trueSubText, 0));
		typingTop();
		setTimeout(typingBottom, 1400);
	}, []);

	return (
		<div className="flex h-screen flex-col items-center justify-center text-center font-almamono text-7xl text-white">
			<div className="z-30 flex flex-col items-center justify-center gap-6">
				<h1>{text}</h1>
				<h2 className="text-3xl">{subText}</h2>
			</div>
		</div>
	);
};

export default Splash;
