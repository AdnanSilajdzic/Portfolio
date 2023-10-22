import { useState } from 'react';

import GitLogo from '../assets/images/github-mark-white.svg';
import ResponsiveAntVideo from './ResponsiveAntVideo';
import AntVideo from './AntVideo';
const ProjectFire = () => {
	const [isResponsive, setIsResponsive] = useState(false);
	return (
		<div className="mb-36">
			<div className="flex flex-wrap justify-center gap-20">
				<div className="z-30 mb-7 flex w-3/4 min-w-[250px] flex-col justify-center gap-4 font-almamonoLight text-2xl text-white sm:w-1/3 sm:text-4xl">
					<h1 className="font-almamono">Project Fire</h1>
					<p className="max-w-full text-sm sm:text-lg">
						Project Fire is a project management web application that allows
						admins to create projects, view project and employee data, and
						create invoices for clients. Employees can view their assigned
						projects and check planned completion dates and progress.
					</p>
					<img
						src={GitLogo}
						className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
					></img>
					<p className="text-sm">front end</p>
					<img
						src={GitLogo}
						className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
					></img>
					<p className="text-sm">back end</p>
				</div>
				{isResponsive ? <ResponsiveAntVideo /> : <AntVideo />}
			</div>
		</div>
	);
};

export default ProjectFire;
