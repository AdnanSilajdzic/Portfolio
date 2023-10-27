import { useState, useEffect, useRef } from 'react';

import GitLogo from '../assets/images/github-mark-white.svg';
import laptop from '../assets/images/notebook-computer.png';
import phone from '../assets/images/smartphone.png';
import AntVideo from './AntVideo';

const ProjectFire = () => {
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
					(window.innerWidth <= 768 || rect.bottom <= window.innerHeight + 100)
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
		<div className="opacity-0" ref={projectFireRef}>
			<div className="flex flex-wrap justify-center gap-20 sm:mr-0">
				<div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:text-4xl md:w-1/4">
					<h1 className="font-almamono">Project Fire</h1>
					<p className="max-w-full text-justify text-sm sm:text-lg">
						Project Fire is a project management web application that allows
						admins to create projects, view project and employee data, and
						create invoices for clients. This application was built During my
						Ant Colony internship.
					</p>
					<div className="flex items-center gap-2">
						<img
							src={GitLogo}
							className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
						></img>
						<p className="mr-10 text-sm">front end</p>
						<img
							src={GitLogo}
							className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
						></img>
						<p className="text-sm">back end</p>
					</div>
				</div>
				<div className="z-30 flex w-full flex-col items-center justify-center md:h-auto md:w-1/2">
					<AntVideo responsive={isResponsive} />
					<div className="sm:text-md z-30 mt-6 flex flex-wrap items-center justify-center gap-12 font-almamono text-sm text-white">
						<img
							onClick={() => setIsResponsive(false)}
							src={laptop}
							className="z-30 h-[50px] w-[50px] cursor-pointer invert transition duration-300 md:hover:scale-150"
						></img>
						<img
							onClick={() => setIsResponsive(true)}
							src={phone}
							className="z-30 h-[50px] w-[50px] cursor-pointer invert transition duration-300 md:hover:scale-150"
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectFire;
