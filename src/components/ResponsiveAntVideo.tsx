import responsiveAntVideo from '../assets/images/responsive-ant-video.mp4';
const ResponsiveAntVideo = () => {
	return (
		<div className="flex h-[500px] w-[250px] justify-center overflow-hidden">
			<video
				className="-mr-11 mt-[-1px] rounded-lg object-cover object-center shadow-lg"
				autoPlay
				loop
				muted
				src={responsiveAntVideo}
			></video>
		</div>
	);
};

export default ResponsiveAntVideo;
