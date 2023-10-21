export default function TypingTextEffect(
	text: string,
	setState: React.Dispatch<React.SetStateAction<string>>,
	duration = 150
) {
	let i = -1;
	const intervalId = setInterval(async () => {
		i++;
		if (i <= text.length) {
			const typingText = text.slice(0, i);
			setState(typingText + '|');
		} else {
			clearInterval(intervalId); // Stop the interval when all elements are processed
		}
	}, duration);
}
