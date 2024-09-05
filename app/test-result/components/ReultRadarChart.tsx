import React, { useEffect, useRef, useState } from 'react';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';
import { Text } from '@visx/text'; // 텍스트 추가를 위해 import
import { curveLinearClosed } from 'd3-shape'; // 극좌표계일 경우 마지막 결과를 닫음
import { Test, testAtom } from '@/atom/testAtom';
import { useAtom } from 'jotai';

const blue = '#3399ff';
const bluePoint = '#3333ff';
const silver = '#e6e6e6';
const silverText = '#989898';
const background = '#FFFFFF';

const degrees = Math.PI * 2;
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

type AngleData = {
	angle: number;
};
// 레이더 차트를 그리기 위한 일정한 각도를 생성
const genWebsAngles: AngleData[] = Array.from({ length: numberOfTypes }, (_, i) => ({
	angle: i * (degrees / numberOfTypes)
}));

const getAngle = (d: AngleData) => d.angle;

// 각 레이더 차트의 꼭지점(x, y) 생성
const genWebsPoints = (angle: number, radius: number) => {
	return {
		x: radius * Math.cos(angle - Math.PI / 2),
		y: radius * Math.sin(angle - Math.PI / 2),
	}
};

// 데이터를 이용한 폴리곤 그리기
const genPolygonPoints = (testData: Test, angles: AngleData[], scale: (n: number) => number, getAngleData: (d: AngleData) => number) => {
	const testDataList: { key: string, value: number }[] = Object.entries(testData).map(([key, value]) => ({ key: key, value: value }))
	const DataListWithKeys = [testDataList[testDataList.length - 1], ...testDataList.slice(0, -1)];

	const points: { x: number; y: number; value: number }[] = new Array(DataListWithKeys.length).fill({
		x: 0,
		y: 0,
		value: 0
	});

	const pointString: string = new Array(DataListWithKeys.length)
		.fill('')
		.reduce((acc, _, i) => {
			// if (i > DataListWithKeys.length) return acc;
			const { value } = DataListWithKeys[i]
			const angle = getAngleData(angles[i])
			const xVal = scale(value) * Math.cos(angle - Math.PI / 2)
			const yVal = scale(value) * Math.sin(angle - Math.PI / 2)
			points[i] = { x: xVal, y: yVal, value };
			acc += `${xVal},${yVal} `;
			return acc;
		}, '')

	return { points, pointString }
}
// 차트의 기본 마진
const defaultMargin = { top: 0, left: 80, right: 80, bottom: 80 };

export type RadarProps = {
	width: number;
	height: number;
	margin?: { top: number; right: number; bottom: number; left: number };
};

export default function ReultRadarChart({
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

	// scaleLineaer는 입력값을 선형적으로 변환하는 스케일 함수
	// 레이더 차트에서 그려지는 폴리곤 최대 값은 45로 지정 : 45를 기준으로 반지름 길이를 반환.
	const yScale = scaleLinear<number>({
		range: [0, radius],
		domain: [0, 45],
	});

	// atom에 보관한 데이터 가져오기
	const [test] = useAtom(testAtom);

	// 화면에 그릴 데이터, 각도 리스트, 최댓값 계산 함수, angle값 가져오는 함수
	const polygonPoints = genPolygonPoints(test, genWebsAngles, d => yScale(d) ?? 0, getAngle)

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
						fontSize={12}
						fill={silverText}
						textAnchor="middle"
					>
						{legend[i].category}
					</Text>
				))}
				{/* 레이더 차트 webs 영역 end */}
				{/* 데이터 폴리곤 영역 start */}
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
				{polygonPoints.points.map((point, i) => (
					<Text
						key={`point-label-${i}`}
						x={point.x + 8}
						y={point.y - 4}
						fontSize={14}
						fill={bluePoint}
						textAnchor="start"
					>
						{point.value}
					</Text>
				))}
				{/* 데이터 폴리곤 영역 ends */}
			</Group>
		</svg>
	);
}
