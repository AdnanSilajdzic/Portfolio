import antVideo from '../assets/images/ant-video.mp4';

const AntVideo = () => {
	return (
		<div className="flex w-10/12 justify-center overflow-hidden md:w-5/12">
			<video
				className="object-fit rounded-lg object-center shadow-lg"
				autoPlay
				loop
				muted
				src={antVideo}
			></video>
		</div>
	);
};

export default AntVideo;
