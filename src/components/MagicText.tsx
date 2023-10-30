import { useEffect } from 'react';

import GitLogo from '../assets/images/github-mark-white.svg';
import Linkedin from '../assets/images/linkedin.svg';
import mail from '../assets/images/mail.svg';
import Spline from '@splinetool/react-spline';

const MagicText = () => {
	let index = 0,
		interval = 1000;

	const rand = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	const animate = (star: any) => {
		star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
		star.style.setProperty('--star-top', `${rand(20, 60)}%`);

		star.style.animation = 'none';
		star.offsetHeight;
		star.style.animation = '';
	};
	useEffect(() => {
		for (const star of document.getElementsByClassName('magic-star')) {
			setTimeout(() => {
				animate(star);

				setInterval(() => animate(star), 1000);
			}, index++ * (interval / 3));
		}
	}, []);
	return (
		<div className="z-30 mt-6 flex w-full flex-col items-center justify-center font-almamono text-2xl text-white md:w-1/3 lg:text-7xl">
			<h1 className="text-center">
				Let's make something
				<span className="magic">
					<span className="magic-star">
						<svg viewBox="0 0 512 512">
							<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
						</svg>
					</span>
					<span className="magic-star">
						<svg viewBox="0 0 512 512">
							<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
						</svg>
					</span>
					<span className="magic-star">
						<svg viewBox="0 0 512 512">
							<path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
						</svg>
					</span>
					<span className="magic-text">magical</span>
				</span>
			</h1>
			<div className="mb-10 mt-10 flex h-full w-full items-end justify-center gap-10 md:justify-start">
				<img
					src={GitLogo}
					alt="Github logo"
					className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125"
				/>
				<img
					src={Linkedin}
					alt="Linkedin logo"
					className="h-10 w-10 cursor-pointer invert transition-all duration-300 ease-in-out hover:scale-125"
				/>
				<img
					src={mail}
					alt="Email logo"
					className="-mb-[6px] h-10 w-10 cursor-pointer invert transition-all duration-300 ease-in-out hover:scale-125"
				/>
			</div>
		</div>
	);
};

export default MagicText;
