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
			className={`flex items-center justify-center rounded-lg bg-white ${
				responsive === true
					? 'h-[70vw] w-[34vw] md:h-[30vw] md:w-[14vw]'
					: 'h-[50vw] w-[90vw] md:h-[30vw] md:w-[50vw]'
			}  overflow-hidden transition-all duration-500`}
		>
			<video
				className={`hidden rounded-lg opacity-0 duration-500 ${
					responsive ? 'w-full' : ''
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
