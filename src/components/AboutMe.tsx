import { useEffect, useState, useRef } from 'react';
import profileImg from '../assets/images/profile-image.jpg';
import TypingTextEffect from '../functions/TypingTextEffect';

const AboutMe = () => {
	const trueText = 'About me';
	const [text, setText] = useState('|');
	const aboutMeRef = useRef<HTMLDivElement | null>(null); // Specify the type

	useEffect(() => {
		const handleScroll = () => {
			// Ensure that the ref is not null before accessing it.
			if (aboutMeRef.current) {
				// Get the position of the AboutMe component relative to the viewport.
				const element = aboutMeRef.current;
				const rect = element.getBoundingClientRect();

				// Check if the AboutMe component is in the viewport.
				if (
					rect.top >= 0 &&
					(window.innerWidth <= 768 || rect.bottom <= window.innerHeight)
				) {
					// Start the typing text animation.
					TypingTextEffect(trueText, setText);

					// Remove the scroll event listener to avoid continuous animations.
					window.removeEventListener('scroll', handleScroll);
				}
			}
		};

		// Attach the scroll event listener when the component mounts.
		window.addEventListener('scroll', handleScroll);

		// Cleanup the event listener when the component unmounts.
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			ref={aboutMeRef}
			className="ml-6 mr-6 flex flex-wrap justify-center gap-20"
		>
			<div className="z-30 mb-7 flex w-1/3 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:text-4xl">
				<h1 className="font-almamono">{text}</h1>
				<p className="max-w-full text-sm sm:text-lg">
					I am a software engineer with a passion for creating innovative and
					creative solutions to complex problems. I love learning new things and
					I am always looking for new challenges. My main focus is on full-stack
					web development, but I am also capable of working on AI and machine
					learning projects.
				</p>
			</div>
			<img
				className="z-30 aspect-square w-1/3 min-w-[250px] rounded-xl bg-white object-cover"
				src={profileImg}
			></img>
		</div>
	);
};

export default AboutMe;
