import { useState, useEffect } from 'react';
import MagicText from './MagicText';
import TypingTextEffect from '../functions/TypingTextEffect';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
	const [placeholderText, setPlaceholderText] = useState(
		'How did you make this glowing blob?!' as string
	);
	const [email, setEmail] = useState('' as string);
	const [message, setMessage] = useState('' as string);
	const [isSending, setIsSending] = useState(false as boolean);
	const placeholderTexts = [
		'How did you make this glowing blob follow my mouse?!',
		'What shampoo do you use?',
		'I love your website!',
		"Are you single? I'm asking for a friend 😳",
		"Why haven't we started working together yet? 😤",
	];

	function sendEmail() {
		var templateParams = {
			email: email,
			message: message,
		};
		//import service id from env file
		const serviceId = import.meta.env.VITE_SERVICE_ID;
		const templateId = import.meta.env.VITE_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_PUBLIC_KEY;
		emailjs.send(serviceId, templateId, templateParams, publicKey).then(
			function (response) {
				setMessage('');
				setEmail('');
				console.log('SUCCESS!', response.status, response.text);
			},
			function (error) {
				console.log('FAILED...', error);
			}
		);
	}

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
		<div className="z-30 flex w-full flex-col flex-wrap items-center justify-center gap-7 font-almamonoLight text-5xl text-white">
			<h1 className="mb-20">Contact me</h1>
			<div className="flex flex-wrap justify-center gap-14">
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>

					<button
						type="submit"
						onClick={sendEmail}
						className="w-40 self-center bg-transparent font-almamono text-2xl text-white transition-all duration-150 hover:scale-110"
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
