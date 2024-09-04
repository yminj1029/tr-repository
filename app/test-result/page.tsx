'use client';
import { useScreenSize } from '@visx/responsive';


import ResultChart from './components/ResultChart';

// import { withScreenSize, WithScreenSizeProvidedProps } from '@visx/responsive';


export default function page() {

	const { width, height } = useScreenSize({ debounceTime: 150 })


	return (
		<div>
			<div>hello</div>
			<ResultChart width={width} height={height} />
		</div>
	);
}
