'use client';
import { useScreenSize } from '@visx/responsive';


import ReultRadarChart from './components/ReultRadarChart';
import ResultBarChart from './components/ResultBarChart';

// import { withScreenSize, WithScreenSizeProvidedProps } from '@visx/responsive';


export default function page() {

	const { width, height } = useScreenSize({ debounceTime: 150 })


	return (
		<div>
			<div>hello</div>
			<ResultBarChart width={width} height={height} />
			<ReultRadarChart width={width} height={height} />
		</div>
	);
}
