const Navigation = () => {
	return (
		<div className="fixed right-0 z-50 hidden h-full w-1/12 flex-col items-center justify-center gap-6 text-white sm:flex">
			<div className="bg-transpared hidden h-5 w-5 rounded-full outline sm:block"></div>
			<div className="bg-transpared h-5 w-5 rounded-full outline-dashed"></div>
			<div className="bg-transpared h-5 w-5 rounded-full outline-dashed"></div>
			<div className="bg-transpared h-5 w-5 rounded-full outline-dashed"></div>
		</div>
	);
};

export default Navigation;
