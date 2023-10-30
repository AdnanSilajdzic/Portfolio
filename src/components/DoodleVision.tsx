import { useState, useEffect, useRef } from 'react';
import P5Sketch from './P5Sketch';
import GitLogo from '../assets/images/github-mark-white.svg';
import TypingTextEffect from '../functions/TypingTextEffect';
const DoodleVision = () => {
	const projectFireRef = useRef<HTMLDivElement | null>(null); // Specify the type
	const [prediction, setPrediction] = useState('');

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
		<div className="mb-36 opacity-0 sm:mt-12" ref={projectFireRef}>
			<div className="flex flex-wrap-reverse justify-center gap-20">
				<div className="z-30 flex w-10/12 flex-col items-center justify-center md:w-1/3">
					<P5Sketch
						changePrediction={(name: string) =>
							TypingTextEffect(name, setPrediction)
						}
					/>
					<p className="font-almamonoThin text-sm text-white sm:text-xl">
						AI prediction: {prediction}
					</p>
				</div>
				<div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:text-4xl md:w-1/4">
					<h1 className="font-almamono">Doodle Vision</h1>
					<p className="max-w-full text-justify text-sm sm:text-lg">
						I built a convolutional neural network that can recognize 150
						different types of drawings and built a web app to demonstrate it. I
						used the Quick, Draw! dataset from Google to train the model. I used
						TensorFlow.js to build the model and React.js to build the web app.
						The example drawings shown are real drawings from the dataset.
					</p>
					<div
						onClick={() => {
							window.open(
								'https://github.com/AdnanSilajdzic/Doodle-Vision-Frontend'
							);
						}}
						className="flex cursor-pointer items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105"
					>
						{' '}
						<img src={GitLogo} className="h-10 w-10 cursor-pointer"></img>
						<p className="text-sm">Repository</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoodleVision;
