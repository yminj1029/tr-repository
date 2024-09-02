import React from 'react';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';
import { Text } from '@visx/text'; // 텍스트 추가를 위해 import
import { curveLinearClosed } from 'd3-shape'; // 극좌표계일 경우 마지막 결과를 닫음

interface chartData {
	category: string,
	score: number
}
const blue = '#3399ff';
export const bluePoint = '#3333ff';
const silver = '#e6e6e6';
// export const background = '#FFFFF';
export const background = '#FFFFFF';

const degrees = Math.PI * 2;

//실제 데이터 값(나중에 atom에 있는 값을 꺼내와야함)
const data = [
	{ category: '9 화합', score: 13 },
	{ category: '1 개혁', score: 12 },
	{ category: '2 협력', score: 32 },
	{ category: '3 성취', score: 22 },
	{ category: '4 창조', score: 19 },
	{ category: '5 탐구', score: 33 },
	{ category: '6 헌신', score: 22 },
	{ category: '7 열정', score: 12 },
	{ category: '8 도전', score: 10 },
];

const legend = [
	{ category: '9 화합', type: "TYPE_9" },
	{ category: '1 개혁', type: "TYPE_1" },
	{ category: '2 협력', type: "TYPE_2" },
	{ category: '3 성취', type: "TYPE_3" },
	{ category: '4 창조', type: "TYPE_4" },
	{ category: '5 탐구', type: "TYPE_5" },
	{ category: '6 헌신', type: "TYPE_6" },
	{ category: '7 열정', type: "TYPE_7" },
	{ category: '8 도전', type: "TYPE_8" },
]


//타입은 9가지
const numberOfTypes = 9;

// 레이더 선 그려질 때 계층
const levels = 9;

// 레이더 차트를 그리기 위한 일정한 각도를 생성
const genWebsAngles = Array.from({ length: numberOfTypes }, (_, i) => ({
	angle: i * (degrees / numberOfTypes)
}));

// 각 레이더 차트의 꼭지점(x, y) 생성
const genWebsPoints = (angle: number, radius: number) => {
	return {
		x: radius * Math.cos(angle - Math.PI / 2),
		y: radius * Math.sin(angle - Math.PI / 2),
	}
};


// 차트의 기본 마진
const defaultMargin = { top: 0, left: 80, right: 80, bottom: 80 };

export type RadarProps = {
	width: number;
	height: number;
	margin?: { top: number; right: number; bottom: number; left: number };
};

export default function TestResult({
	width,
	height,
	margin = defaultMargin,
}: RadarProps) {
	const xMax = width - margin.left - margin.right;
	const yMax = height - margin.top - margin.bottom;

	// 레이더 차트의 반지름
	const radius = Math.min(xMax, yMax) / 2;

	// 레이더 차트에서 (x1,y1)
	const zeroPoint = new Point({ x: 0, y: 0 });

	return width < 10 ? null : (
		<svg width={width} height={height}>
			<rect fill={background} width={width} height={height} rx={14} />
			<Group top={height / 2 - margin.top} left={width / 2}>
				{/* 레이더 차트 webs 영역 start */}
				{[...new Array(levels)].map((_, i) => (
					<LineRadial
						key={`web-${i}`}
						data={genWebsAngles}
						angle={d => d.angle}
						radius={((i + 1) * radius) / levels}
						curve={curveLinearClosed}
						fill="none"
						stroke={silver}
						strokeWidth={2}
						strokeOpacity={i === levels - 1 ? 0.8 : 0.4}
						strokeLinecap="round"
					/>
				))}

				{genWebsAngles.map(({ angle }, i) => (
					<Line
						key={`radar-line-${i}`}
						from={zeroPoint}
						to={genWebsPoints(angle, radius)}
						strokeOpacity={0.4}
						stroke={silver}
					/>
				))}

				{genWebsAngles.map(({ angle }, i) => (
					<Text
						key={`category-label-${i}`}
						x={genWebsPoints(angle, radius + 16).x}
						y={genWebsPoints(angle, radius + 16).y}
						fontSize={14}
						fill={blue}
						textAnchor="middle"
					>
						{legend[i].category}
					</Text>
				))}





				{/* 레이더 차트 webs 영역 end */}
			</Group>
		</svg>
	);
}
