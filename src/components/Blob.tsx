import { useEffect } from 'react';

type Props = {};

const Blob = () => {
	useEffect(() => {
		addEventListener('pointermove', (e) => {
			const blob = document.querySelector('#blob') as HTMLDivElement;
			blob.animate(
				{
					left: `${e.clientX}px`,
					top: `${e.clientY}px`,
				},
				{ duration: 10000, fill: 'forwards' }
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
				className="absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-300 to-red-400"
			></div>
			<div
				id="blur"
				className="absolute z-10 h-full w-screen backdrop-blur-[150px]"
			></div>
		</div>
	);
};

export default Blob;
