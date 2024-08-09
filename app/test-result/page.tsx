'use client';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import ResultChart from './components/ResultChart';

export default function page() {
	return (
		<ParentSize>
			{({ width, height }) => <ResultChart width={width} height={height} />}
		</ParentSize>
	);
}
