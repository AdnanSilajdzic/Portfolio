import ProjectFire from './ProjectFire';

const Projects = () => {
	return (
		<div className="z-30 flex flex-col items-center justify-center">
			<h1 className="mb-10 w-3/4 text-center font-almamono text-3xl text-white sm:mb-20 sm:text-5xl">
				Projects
			</h1>
			<div className="mt-20 flex flex-col gap-20">
				<ProjectFire />
			</div>
		</div>
	);
};

export default Projects;
