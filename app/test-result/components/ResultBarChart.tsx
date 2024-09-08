import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text'; // 텍스트 추가를 위해 import
import { scaleBand, scaleLinear } from '@visx/scale';
import { Test, testAtom } from '@/atom/testAtom';
import { useAtom } from 'jotai';
import { Line } from '@visx/shape';


const blueBar = '#3333ff';
const silver = '#e6e6e6';
const silverText = '#989898';

type LegendData = {
    category: string;
    type: keyof Test;
    value?: number; // value는 optional로 설정, 추가될 수 있음
};
const legend: LegendData[] = [
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

// accessors
const getTypeByCategory = (d: LegendData) => d.type;
const getCategory = (d: LegendData) => d.category;
const getValue = (d: LegendData) => Number(d.value);

export type BarsProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
};

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 80 };
export default function Example({ width, height, margin = defaultMargin,
}: BarsProps) {
    const xMax = width - margin.left - margin.right;
    const yMax = height / 2 - margin.top - margin.bottom;

    // atom에 보관한 데이터 가져오기
    const [test] = useAtom(testAtom);

    const totalResult: LegendData[] = legend.reduce<LegendData[]>((acc, cur) => {
        const addValue = { ...cur, value: test[cur.type] }
        return [...acc, addValue]
    }, [])

    // scales, memoize for performance
    const xScale =
        scaleBand<string>({
            range: [0, xMax],
            domain: totalResult.map(getTypeByCategory),
            padding: 0.6,
        })


    const yScale =
        scaleLinear<number>({
            range: [yMax, 0],
            domain: [0, 45],
        })

    return width < 10 ? null : (
        <svg width={width} height={height / 2}>
            <Group top={margin.top} left={margin.left}>

                {[...new Array(10)].map((_, i) =>
                    <Line
                        key={i}
                        x1={0}
                        y1={yScale(i * 5)}
                        x2={xMax}
                        y2={yScale(i * 5)}
                        shapeRendering="crispEdges"
                        stroke={silver}
                        strokeWidth="2"
                        strokeOpacity={i === 0 ? 0.8 : 0.4}
                    />
                )}
                {[...new Array(10)].map((_, i) =>
                    <Text
                        key={`category-label-${i}`}
                        x={0 - 5}
                        y={yScale(i * 5) + 3}
                        fontSize={12}
                        fill={silverText}
                        textAnchor="end"
                    >
                        {i * 5}
                    </Text>
                )}
                {totalResult.map((d, i) => {
                    const typeByCategory = getTypeByCategory(d);
                    const category = getCategory(d)
                    const value = getValue(d)
                    const barWidth = xScale.bandwidth();
                    const barHeight = yMax - (yScale(value) ?? 0);
                    const barX = xScale(typeByCategory);
                    const barY = yMax - barHeight;
                    const textX = (Number(barX) + barWidth / 2)

                    return (
                        <React.Fragment key={`radar-fragment-${i}`}>
                            <Bar
                                key={`bar-${typeByCategory}`}
                                x={barX}
                                y={barY}
                                width={barWidth}
                                height={barHeight}
                                fill={blueBar}
                                opacity={0.8}
                            />
                            <Text
                                key={`value-label-${typeByCategory}`}
                                x={textX}
                                y={barY - 4}
                                fontSize={12}
                                fill={blueBar}
                                textAnchor="middle"
                            >
                                {value}
                            </Text>
                            <Text
                                key={`category-label-${typeByCategory}`}
                                x={textX}
                                y={yMax + 20}
                                fontSize={14}
                                fill={silverText}
                                textAnchor="middle"
                            >
                                {category}
                            </Text>
                        </React.Fragment>
                    );
                })}

            </Group>


        </svg>
    );
}
