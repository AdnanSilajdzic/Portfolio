/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				almamono: ['Alma Mono'],
				almamonoBold: ['Alma Mono Bold'],
				almamonoLight: ['Alma Mono Light'],
				almamonoHeavy: ['Alma Mono Heavy'],
				almamonoThin: ['Alma Mono Thin'],
			},
		},
		plugins: [],
	},
};
