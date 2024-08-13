import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
	content: [
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			slate: '#f8fafc',
		},
		minWidth: {
			'220': '220px',
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

export default withMT(config);
