import React, { useEffect, useRef, useState } from 'react';
import { Textarea } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';
import { testAtom } from '@/atom/testAtom';
import { useAtom } from 'jotai';

interface TestResultByType {
	type: string;
	kor: string;
	data: number;
}

const CopyableResult: React.FC = () => {
	const [test] = useAtom(testAtom);

	const [text, setText] = useState<string>('');
	const [typeAddText, setTypeAddText] = useState<string>('');

	useEffect(() => {
		// 	// 객체를 [key, value] 쌍의 배열로 변환
		const entries = Object.entries(test);

		// value 값에 따라 배열을 정렬
		const sortedEntries = entries.sort(
			([, valueA], [, valueB]) => valueB - valueA,
		);

		const sortedResult = sortedEntries.reduce((acc, cur, i) => {
			let addStr = `${cur[0].split('_')[1]}(${String(cur[1])})`;
			if (i === 0) return acc + addStr;

			if (cur[1] < sortedEntries[i - 1][1]) {
				return `${acc} > ${addStr}`;
			}

			if (cur[1] === sortedEntries[i - 1][1]) {
				return `${acc} = ${addStr}`;
			}
			return acc + addStr;
		}, '');
		// setTypeAddText
		setText(sortedResult);
		const dataByType: TestResultByType[] = [];
		// dataByType.
		const dataBySurvive = test.TYPE_1 + test.TYPE_8 + test.TYPE_9;
		dataByType.push({ type: 'survive', kor: '장', data: dataBySurvive });
		const dataByEmotion = test.TYPE_2 + test.TYPE_3 + test.TYPE_4;
		dataByType.push({ type: 'emotion', kor: '가슴', data: dataByEmotion });
		const dataByBrain = test.TYPE_5 + test.TYPE_6 + test.TYPE_7;
		dataByType.push({ type: 'brain', kor: '머리', data: dataByBrain });
		const sortedDataByType = dataByType.sort((a, b) => b.data - a.data);
		const resultByType = sortedDataByType.reduce((acc, cur, idx) => {
			const resultString = `${cur.kor}(${cur.data})`;
			if (idx === 0) return acc + resultString;
			if (cur.data < sortedDataByType[idx - 1].data) {
				return `${acc} > ${resultString}`;
			}
			if (cur.data === sortedDataByType[idx - 1].data) {
				return `${acc} = ${resultString}`;
			}
			return acc + resultString;
		}, '');
		setTypeAddText(resultByType);
	}, [test]); // 의존성 배열에 `test`를 넣습니다.

	// eslint-disable-next-line no-undef
	const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

	const textAreaRef = useRef<HTMLDivElement>(null);
	const handleCopy = async () => {
		if (textAreaRef.current) {
			try {
				await navigator.clipboard.writeText(textAreaRef.current.innerText);
				alert('Text copied to clipboard!');
			} catch (err) {
				console.error('Failed to copy: ', err);
			}
		}
	};
	const handleTouchStart = () => {
		const timer = setTimeout(() => {
			if (textAreaRef.current) {
				const range = document.createRange();
				const selection = window.getSelection();
				if (selection && textAreaRef.current) {
					range.selectNodeContents(textAreaRef.current);
					selection.removeAllRanges();
					selection.addRange(range);
					document.execCommand('copy');
					alert('Text copied to clipboard!');
				}
			}
		}, 800); // 800ms 동안 길게 눌렀을 때 복사 동작 수행

		setPressTimer(timer);
	};

	const handleTouchEnd = () => {
		if (pressTimer) {
			clearTimeout(pressTimer); // 길게 누르는 동작이 취소될 경우 타이머 클리어
		}
	};

	const handleTouchCancel = () => {
		if (pressTimer) {
			clearTimeout(pressTimer); // 터치가 취소된 경우 타이머 클리어
		}
	};

	return (
		<div className="sm:w-10/12 border border-blue-gray-50 rounded-xl bg-slate">
			<div className="flex border-b border-blue-gray-50 p-1 justify-end items-center">
				<span className="text-sm text-gray-500">
					Copy the brief test result.
				</span>
				{/* @ts-ignore */}
				<IconButton variant="text" onClick={handleCopy}>
					<i className="fa-regular fa-copy"></i>
				</IconButton>
			</div>
			<div className="p-4">
				<p
					ref={textAreaRef}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onTouchCancel={handleTouchCancel}
				>
					{text}
				</p>
				<p>{typeAddText}</p>
			</div>
		</div>
	);
};

export default CopyableResult;
