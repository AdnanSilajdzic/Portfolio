import { useState } from 'react';

import GitLogo from '../assets/images/github-mark-white.svg';
import ResponsiveAntVideo from './ResponsiveAntVideo';
import laptop from '../assets/images/notebook-computer.png';
import phone from '../assets/images/smartphone.png';
import AntVideo from './AntVideo';

const ProjectFire = () => {
	const [isResponsive, setIsResponsive] = useState(false);
	return (
		<div className="mb-36">
			<div className="flex flex-wrap justify-center gap-20">
				<div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:w-1/3 sm:text-4xl">
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
				<div className="z-30 mr-10 flex h-[600px] w-1/2 flex-col items-center">
					<AntVideo responsive={isResponsive} />
					<div className="z-30 mt-6 flex items-center justify-center gap-12 font-almamono text-white">
						<p>Test the responsiveness!</p>
						<img
							onClick={() => setIsResponsive(false)}
							src={laptop}
							className="z-30 h-[50px] w-[50px] cursor-pointer invert transition duration-300 hover:scale-150"
						></img>
						<img
							onClick={() => setIsResponsive(true)}
							src={phone}
							className="z-30 h-[50px] w-[50px] cursor-pointer invert transition duration-300 hover:scale-150"
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectFire;
