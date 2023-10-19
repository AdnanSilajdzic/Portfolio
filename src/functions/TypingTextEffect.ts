export default function TypingTextEffect(text: string, index: number) {
	const typingText = text.slice(0, index);
	const result = typingText + '|';
	return result;
}
