import { useEffect, useState } from 'react';

type Props = {};

const Blob = () => {
	const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

	useEffect(() => {
		const blob = document.querySelector('#blob') as HTMLDivElement;
		//add rotation animation that also elongates the blob
		blob.animate(
			[
				{ transform: 'rotate(0deg) scaleY(1)' },
				{ transform: 'rotate(180deg) scaleY(1.5)' },
				{ transform: 'rotate(360deg) scaleY(1)' },
			],
			{
				duration: 7000,
				iterations: Infinity,
			}
		);
		addEventListener('pointermove', (e) => {
			blob.animate(
				{
					left: `${e.clientX}px`,
					top: `${e.clientY}px`,
				},
				{ duration: 20000, fill: 'forwards' }
			);
		});

		// event listener for tap on mobile
		addEventListener('touchstart', (e) => {
			blob.animate(
				{
					left: `${e.touches[0].clientX}px`,
					top: `${e.touches[0].clientY}px`,
				},
				{ duration: 5000, fill: 'forwards' }
			);
		});

		//remove event listener when the component unmounts
		return () => {
			removeEventListener('pointermove', () => {});
		};
	}, []);
	return (
		<div className="absolute h-screen w-screen overflow-hidden">
			<div
				id="blob"
				className="blob absolute left-1/2 top-1/2 z-0 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#E71D36] to-[#2EC4B6] sm:h-[500px] sm:w-[500px]"
			></div>
			<div
				id="blur"
				className="fixed z-10 h-full w-full backdrop-blur-[50px] sm:backdrop-blur-[150px]"
			></div>
		</div>
	);
};

export default Blob;
