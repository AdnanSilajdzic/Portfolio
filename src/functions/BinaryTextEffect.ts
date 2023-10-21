export default function BinaryTextEffect(
	text: string,
	setState: React.Dispatch<React.SetStateAction<string>>
) {
	let i = -1;
	const intervalId = setInterval(async () => {
		i++;
		if (i <= text.length) {
			const binaryTextStart = text.slice(0, i);
			const binaryTextEnd = text
				.slice(i)
				.split('')
				.map((char) => {
					if (char === ' ') return ' ';
					const number = Math.floor(Math.random() * 2);
					return number === 0 ? '0' : '1';
				})
				.join('');
			const binaryText = binaryTextStart + binaryTextEnd;
			setState(binaryText);
		} else {
			clearInterval(intervalId); // Stop the interval when all elements are processed
		}
	}, 40);
}
