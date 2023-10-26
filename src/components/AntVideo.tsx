import { useEffect } from 'react';

import antVideo from '../assets/images/ant-video.mp4';
import responsiveAntVideo from '../assets/images/cropped-responsive-ant-video.mp4';

//define props
interface Props {
	responsive: boolean;
}

const AntVideo = ({ responsive }: Props) => {
	useEffect(() => {
		const video = document.querySelector('video');
		const videoContainer = document.querySelector('#video-container');

		setTimeout(() => {
			//remove class from video
			video?.classList.remove('hidden');
			setTimeout(() => {
				video?.classList.add('opacity-100');
				videoContainer?.classList.remove('bg-white');
			}, 200);
		}, 400);
	}, [responsive]);

	return (
		<div
			id="video-container"
			className={`flex h-[500px] w-5/6 items-center justify-center rounded-lg bg-white ${
				responsive === true
					? 'w-[240px]'
					: 'h-[300px] max-w-full md:h-[500px] md:w-[900px]'
			}  overflow-hidden transition-all duration-500`}
		>
			<video
				className={`hidden rounded-lg opacity-0 duration-500 ${
					responsive ? 'w-[240px]' : ''
				}`}
				autoPlay
				loop
				muted
				src={responsive === false ? antVideo : responsiveAntVideo}
			></video>
		</div>
	);
};

export default AntVideo;
