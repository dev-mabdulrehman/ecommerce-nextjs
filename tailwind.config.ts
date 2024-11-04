import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true, // Centers the container by default
				padding: '1rem', // Adds padding by default
				screens: {
					sm: '100%', // Full width on small screens
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1536px',
				},
			},
			fontFamily: {
				'integral-cf': ['IntegralCF', 'sans-serif'],
				satoshi: ['Satoshi', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
