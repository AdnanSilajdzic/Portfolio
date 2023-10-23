import responsiveAntVideo from '../assets/images/responsive-ant-video.mp4';
const ResponsiveAntVideo = () => {
	return (
		<div className="flex h-[500px] w-[255px] justify-center overflow-hidden rounded-lg">
			<video
				className="-mr-12 mt-[-1px] rounded-lg object-cover object-center"
				autoPlay
				loop
				muted
				src={responsiveAntVideo}
			></video>
		</div>
	);
};

export default ResponsiveAntVideo;
