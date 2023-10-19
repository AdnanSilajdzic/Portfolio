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
		}, 60);
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
		}, 60);
	};

	useEffect(() => {
		setSubText(BinaryTextEffect(trueSubText, 0));
		setText(BinaryTextEffect(trueText, 0));
		setTimeout(() => {
			typingTop();
			setTimeout(typingBottom, 1400);
		}, 800);
	}, []);

	return (
		<div
			className={`flex h-screen flex-col items-center justify-center text-center font-almamono text-4xl text-white sm:text-7xl`}
		>
			<div className="splash z-30 flex flex-col items-center justify-center gap-6">
				<h1>{text}</h1>
				<h2 className="text-lg sm:text-3xl">{subText}</h2>
			</div>
		</div>
	);
};

export default Splash;
