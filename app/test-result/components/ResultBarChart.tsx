import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Test, testAtom } from '@/atom/testAtom';
import { useAtom } from 'jotai';

const data = letterFrequency.slice(5);
const verticalMargin = 120;
const blueBar = '#3333ff';

type LegendData = {
    category: string;
    type: keyof Test;
    value?: number; // value는 optional로 설정, 추가될 수 있음
};
const legend: LegendData[] = [
    { category: '1 개혁', type: "TYPE_1" },
    { category: '2 협력', type: "TYPE_2" },
    { category: '3 성취', type: "TYPE_3" },
    { category: '4 창조', type: "TYPE_4" },
    { category: '5 탐구', type: "TYPE_5" },
    { category: '6 헌신', type: "TYPE_6" },
    { category: '7 열정', type: "TYPE_7" },
    { category: '8 도전', type: "TYPE_8" },
    { category: '9 화합', type: "TYPE_9" },
]

// accessors
// const getLetter = (d: LegendData) => d.category;
const getLetter = (d: LetterFrequency) => d.letter;
const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;

export type BarsProps = {
    width: number;
    height: number;

};

export default function Example({ width, height, }: BarsProps) {
    const xMax = width;
    const yMax = height - verticalMargin;

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
            round: true,
            domain: data.map(getLetter),
            // domain: totalResult.map((d) => d.category),
            padding: 0.4,
        })


    const yScale =
        scaleLinear<number>({
            range: [yMax, 0],
            domain: [0, 45],
        })

    return width < 10 ? null : (
        <svg width={width} height={height}>
            <Group top={verticalMargin / 2}>
                {data.map((d) => {
                    const letter = getLetter(d);
                    const barWidth = xScale.bandwidth();
                    const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
                    const barX = xScale(letter);
                    const barY = yMax - barHeight;
                    return (
                        <Bar
                            key={`bar-${letter}`}
                            x={barX}
                            y={barY}
                            width={barWidth}
                            height={barHeight}
                            fill={blueBar}
                            opacity={0.4}
                        />
                    );
                })}
            </Group>
            <Group top={verticalMargin / 2}>
                {data.map((d) => {
                    const letter = getLetter(d);
                    const barWidth = xScale.bandwidth();
                    const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
                    const barX = xScale(letter);
                    const barY = yMax - barHeight;
                    return (
                        <Bar
                            key={`bar-${letter}`}
                            x={barX}
                            y={barY}
                            width={barWidth}
                            height={barHeight}
                            fill={blueBar}
                            opacity={0.4}
                        />
                    );
                })}
            </Group>
        </svg>
    );
}
