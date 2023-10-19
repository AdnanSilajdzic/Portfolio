import { useEffect } from 'react';

type Props = {};

const Blob = () => {
	useEffect(() => {
		const blob = document.querySelector('#blob') as HTMLDivElement;
		//add rotation animation that also elongates the blob
		blob.animate(
			[
				{ transform: 'rotate(0deg) scaleY(1)' },
				{ transform: 'rotate(360deg) scaleY(1.5)' },
				{ transform: 'rotate(720deg) scaleY(1)' },
			],
			{
				duration: 12000,
				iterations: Infinity,
			}
		);
		addEventListener('pointermove', (e) => {
			let x = e.clientX;
			let y = e.clientY;
			if (y > window.innerHeight - 450) {
				y = window.innerHeight - 450;
			}
			blob.animate(
				{
					left: `${x}px`,
					top: `${y}px`,
				},
				{ duration: 20000, fill: 'forwards' }
			);
		});
		//remove event listener when the component unmounts
		return () => {
			removeEventListener('pointermove', () => {});
		};
	}, []);
	return (
		<div>
			<div
				id="blob"
				className="blob absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#E71D36] to-[#2EC4B6]"
			></div>
			<div
				id="blur"
				className="absolute z-10 h-full w-screen backdrop-blur-[150px]"
			></div>
		</div>
	);
};

export default Blob;
