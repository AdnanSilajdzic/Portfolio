export default function BinaryTextEffect(text: string, index: number) {
	const binaryTextStart = text.slice(0, index);
	const binaryTextEnd = text
		.slice(index)
		.split('')
		.map((char) => {
			if (char === ' ') return ' ';
			const number = Math.floor(Math.random() * 2);
			return number === 0 ? '0' : '1';
		})
		.join('');
	const binaryText = binaryTextStart + binaryTextEnd;
	return binaryText;
}
