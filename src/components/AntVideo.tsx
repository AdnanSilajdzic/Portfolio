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
				setTimeout(() => {
					videoContainer?.classList.remove('bg-white');
				}, 500);
			}, 500);
		}, 400);
	}, [responsive]);

	return (
		<div
			id="video-container"
			className={`flex items-center justify-center rounded-lg bg-white ${
				responsive === true
					? 'h-[70vw] w-[34vw] md:h-[30vw] md:w-[14vw]'
					: 'h-[50vw] w-[88.88888vw] md:h-[30vw] md:w-[53.333333vw]'
			} overflow-hidden`}
			style={{
				transition: 'height 0.5s, width 0.5s, opacity 0.5s ease-in-out',
			}}
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
