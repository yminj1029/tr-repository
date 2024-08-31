import React from 'react';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';

interface chartData {
	category: string,
	score: number
}
const blue = '#3399ff';
export const bluePoint = '#3333ff';
const silver = '#d9d9d9';
// export const background = '#FFFFF';
export const background = '#FFFFFF';

const degrees = 360;

//실제 데이터 값(나중에 atom에 있는 값을 꺼내와야함)
const data = [
	{ category: '1', score: 12 },
	{ category: '2', score: 32 },
	{ category: '3', score: 22 },
	{ category: '4', score: 19 },
	{ category: '5', score: 33 },
	{ category: '6', score: 22 },
	{ category: '7', score: 12 },
	{ category: '8', score: 10 },
	{ category: '9', score: 13 },
];


const setYScore = (d: chartData) => d.score;

// 방사선을 그리기 위해 필요한 영역 : angle(각도)를 계산한다.
// 필요한 데이터가 홀수이므로 
const genAngles = (length: number) =>
	[...new Array(length + 1)].map((_, i) => ({
		angle:
			i * (degrees / length) + (length % 2 === 0 ? 0 : degrees / length / 2),
	}));


const genPoints = (length: number, radius: number) => {
	// 360도/9 => step당 40도
	const step = (Math.PI * 2) / length;
	console.log("check math", step, radius)
	return [...new Array(length)].map((_, i) => ({
		x: radius * Math.sin(i * step),
		y: radius * Math.cos(i * step),
	}));
};

function genPolygonPoints<Datum>(
	dataArray: Datum[],
	scale: (n: number) => number,
	getValue: (d: Datum) => number,
) {
	const step = (Math.PI * 2) / dataArray.length;
	const points: { x: number; y: number }[] = new Array(dataArray.length).fill({
		x: 0,
		y: 0,
	});
	const pointString: string = new Array(dataArray.length + 1)
		.fill('')
		.reduce((res, _, i) => {
			if (i > dataArray.length) return res;
			const xVal = scale(getValue(dataArray[i - 1])) * Math.sin(i * step);
			const yVal = scale(getValue(dataArray[i - 1])) * Math.cos(i * step);
			points[i - 1] = { x: xVal, y: yVal };
			res += `${xVal},${yVal} `;
			return res;
		});
	console.log("pointString", pointString);

	return { points, pointString };
}

const defaultMargin = { top: 40, left: 80, right: 80, bottom: 80 };

export type RadarProps = {
	width: number;
	height: number;
	margin?: { top: number; right: number; bottom: number; left: number };
	levels?: number;
};

export default function TestResult({
	width,
	height,
	levels = 9,
	margin = defaultMargin,
}: RadarProps) {
	const xMax = width - margin.left - margin.right;
	const yMax = height - margin.top - margin.bottom;
	const radius = Math.min(xMax, yMax) / 2;

	const radialScale = scaleLinear<number>({
		range: [0, Math.PI * 2],
		domain: [degrees, 0],
	});

	// 최댓값을 45로 고정(domain)
	const yScale = scaleLinear<number>({
		range: [0, radius],
		domain: [0, 45],
	});

	const webs = genAngles(data.length);
	const points = genPoints(data.length, radius);
	const polygonPoints = genPolygonPoints(data, d => yScale(d) ?? 0, setYScore);
	const zeroPoint = new Point({ x: 0, y: 0 });

	return width < 10 ? null : (
		<svg width={width} height={height}>
			<rect fill={background} width={width} height={height} rx={14} />
			<Group top={height / 2 - margin.top} left={width / 2}>
				{/* 방사선 영역 */}
				{[...new Array(levels)].map((_, i) => (
					<LineRadial
						key={`web-${i}`}
						data={webs}
						angle={d => radialScale(d.angle) ?? 0}
						radius={((i + 1) * radius) / levels}
						fill="none"
						stroke={silver}
						strokeWidth={2}
						strokeOpacity={0.8}
						strokeLinecap="round"
					/>
				))}
				{[...new Array(data.length)].map((_, i) => (
					<Line
						key={`radar-line-${i}`}
						from={zeroPoint}
						to={points[i]}
						stroke={silver}
					/>
				))}
				<polygon
					points={polygonPoints.pointString}
					fill={blue}
					fillOpacity={0.3}
					stroke={blue}
					strokeWidth={1}
				/>
				{polygonPoints.points.map((point, i) => (
					<circle
						key={`radar-point-${i}`}
						cx={point.x}
						cy={point.y}
						r={4}
						fill={bluePoint}
					/>
				))}
			</Group>
		</svg>
	);
}
