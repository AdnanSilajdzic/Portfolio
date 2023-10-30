import { useState, useEffect } from 'react';
import MagicText from './MagicText';
import TypingTextEffect from '../functions/TypingTextEffect';

const ContactMe = () => {
	const [placeholderText, setPlaceholderText] = useState(
		'How did you make this glowing blob?!' as string
	);
	const placeholderTexts = [
		'How did you make this glowing blob follow my mouse?!',
		'What shampoo do you use?',
		'I love your website!',
		"Are you single? I'm asking for a friend 😳",
		"Why haven't we started working together yet? 😤",
	];

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			if (index === placeholderTexts.length - 1) index = 0;
			else index++;
			TypingTextEffect(placeholderTexts[index], setPlaceholderText, 30);
		}, 4000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="z-30 flex w-full flex-col flex-wrap-reverse items-center justify-center gap-7 font-almamonoLight text-5xl text-white">
			<h1 className="mb-20">Contact me</h1>
			<div className="flex flex-wrap-reverse justify-center gap-14">
				<div className="flex w-10/12 flex-col gap-5 md:w-1/2">
					<label
						htmlFor="email"
						className="-mb-5 font-almamono text-2xl text-white"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="example@email.com"
						className="w-full rounded-xl bg-[rgba(29,33,43,0.68)] p-3 font-almamono text-sm text-white sm:text-xl"
					/>
					<label
						htmlFor="message"
						className="-mb-5 font-almamono text-2xl text-white"
					>
						Message
					</label>
					<textarea
						name="message"
						id="message"
						className="max-h-60 w-full rounded-xl bg-[rgba(29,33,43,0.68)] p-3 font-almamono text-sm text-white sm:text-xl"
						placeholder={placeholderText}
						rows={10}
					></textarea>

					<button
						type="submit"
						className="w-40 self-center bg-transparent font-almamono text-2xl text-white"
					>
						Send
					</button>
				</div>
				<MagicText />
			</div>
		</div>
	);
};

export default ContactMe;
