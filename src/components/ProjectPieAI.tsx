import { useState, useEffect, useRef } from 'react';

import speaker from '../assets/images/speaker.jpg';
import aiPaper from '../assets/images/ai-paper1.png';
import GitLogo from '../assets/images/github-mark-white.svg';

const ProjectPieAI = () => {
	const [isResponsive, setIsResponsive] = useState(false);
	const projectFireRef = useRef<HTMLDivElement | null>(null); // Specify the type
	useEffect(() => {
		const handleScroll = () => {
			// Ensure that the ref is not null before accessing it.
			if (projectFireRef.current) {
				// Get the position of the AboutMe component relative to the viewport.
				const element = projectFireRef.current;
				const rect = element.getBoundingClientRect();

				// Check if the AboutMe component is in the viewport.
				if (
					rect.top >= 0 &&
					(window.innerWidth <= 768 || rect.bottom <= window.innerHeight + 200)
				) {
					//add css class to the project section
					element.classList.add('slide-and-appear-l');
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
		<div className="mb-36 opacity-0" ref={projectFireRef}>
			<div className="flex flex-wrap-reverse justify-center sm:gap-20">
				<div className="z-30 flex w-10/12 items-center md:w-1/2">
					<img
						src={aiPaper}
						className="z-[29] h-4/6 w-5/6 cursor-pointer rounded-lg object-cover object-top transition-all duration-300 ease-in-out hover:-rotate-6"
					></img>
					<img
						src={speaker}
						className="z-30 -ml-[200px] mt-44 h-4/6 w-7/12 cursor-pointer rounded-lg object-cover transition-all duration-300 ease-in-out hover:rotate-6"
					></img>
				</div>
				<div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:text-4xl md:w-1/4">
					<h1 className="font-almamono">Pneumonia Diagnosing AI</h1>
					<p className="max-w-full text-justify text-sm sm:text-lg">
						I built an artificial neural network that can diagnose pneumonia
						with above 90% accuracy. I was invited to present this project at an
						AI event hosted by{' '}
						<a
							className="cursor-pointer font-bold underline"
							href="https://deeplearning.ai"
						>
							Deeplearning.ai
						</a>{' '}
						called Pie & AI. The research paper for this project is currently
						under review for publication.
					</p>
					<div className="flex items-center gap-2">
						<img
							src={GitLogo}
							className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
						></img>
						<p className="mr-10 text-sm">Jupyter notebook</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPieAI;
