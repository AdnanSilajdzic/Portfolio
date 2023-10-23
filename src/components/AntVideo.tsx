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

		setTimeout(() => {
			//remove class from video
			video?.classList.remove('hidden');
			setTimeout(() => {
				video?.classList.add('opacity-100');
			}, 200);
		}, 400);
	}, [responsive]);

	return (
		<div
			className={`h-full w-5/6 rounded-lg bg-white ${
				responsive === true ? 'md:w-[255px]' : 'md:w-full'
			}  overflow-hidden transition-all duration-500`}
		>
			<video
				className={`hidden rounded-lg opacity-0 duration-500 ${
					responsive ? 'w-[255px]' : ''
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
