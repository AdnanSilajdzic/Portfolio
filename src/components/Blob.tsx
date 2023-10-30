import { useEffect } from 'react';

const Blob = () => {
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
		setTimeout(() => {
			addEventListener('pointermove', (e) => {
				blob.animate(
					{
						left: `${e.clientX}px`,
						top: `${e.clientY}px`,
					},
					{ duration: 15000, fill: 'forwards' }
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
		}, 3000);

		//remove event listener when the component unmounts
		return () => {
			removeEventListener('pointermove', () => {});
			removeEventListener('touchstart', () => {});
		};
	}, []);
	return (
		<div className="fixed h-screen w-screen overflow-hidden">
			<div
				id="blob"
				className="blob absolute left-1/2 top-1/2 z-[-2] h-[28vmax] w-[28vmax] rounded-full bg-gradient-to-r from-[#E71D36] to-[#2EC4B6]"
			></div>
			<div
				id="blur"
				className="fixed z-[-1] h-full w-full backdrop-blur-[6vmax]"
			></div>
		</div>
	);
};

export default Blob;
