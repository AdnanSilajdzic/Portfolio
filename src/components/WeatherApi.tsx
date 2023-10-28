import { useState, useEffect, useRef } from 'react';

import GitLogo from '../assets/images/github-mark-white.svg';
import codeScreenshot from '../assets/images/carbon (10).png';
const WeatherApi = () => {
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
					element.classList.add('slide-and-appear-r');
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
			<div className="flex flex-wrap justify-center sm:gap-20">
				<div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:text-4xl md:w-1/4">
					<h1 className="font-almamono">Weather API</h1>
					<p className="max-w-full text-justify text-sm sm:text-lg">
						I built a weather API that can be used to get the current weather
						conditions of any city in the world. I used Express.js to build the
						API. The features of this API include: data caching, user
						authentication, request logging, swagger and postman documentation
						and <a className="cursor-pointer font-bold underline">more</a>
					</p>
					<div className="flex items-center gap-2">
						<img
							src={GitLogo}
							className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
						></img>
						<p className="mr-10 text-sm">Repository</p>
					</div>
				</div>
				<div className="z-30 flex w-10/12 items-center md:w-1/2">
					<img
						src={codeScreenshot}
						className="z-[29] w-full rounded-xl object-contain"
					></img>
				</div>
			</div>
		</div>
	);
};

export default WeatherApi;
