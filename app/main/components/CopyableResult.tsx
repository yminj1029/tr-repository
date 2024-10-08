import React, { useEffect, useRef, useState } from 'react';
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
		// `test` 객체의 키-값 쌍을 정렬된 배열로 변환
		const sortedEntries = Object.entries(test).sort(([, a], [, b]) => b - a);

		// 정렬된 결과를 문자열로 변환
		const sortedResult = sortedEntries
			.map((entry, i, arr) => {
				const [key, value] = entry;
				const prefix =
					i > 0
						? value < arr[i - 1][1]
							? ' > '
							: value === arr[i - 1][1]
								? ' = '
								: ''
						: '';
				return `${prefix}${key.split('_')[1]}(${value})`;
			})
			.join('');
		setText(sortedResult);

		// TestResultByType 데이터를 생성하고 정렬
		const dataByType: TestResultByType[] = [
			{
				type: 'survive',
				kor: '장',
				data: test.TYPE_1 + test.TYPE_8 + test.TYPE_9,
			},
			{
				type: 'emotion',
				kor: '가슴',
				data: test.TYPE_2 + test.TYPE_3 + test.TYPE_4,
			},
			{
				type: 'brain',
				kor: '머리',
				data: test.TYPE_5 + test.TYPE_6 + test.TYPE_7,
			},
		].sort((a, b) => b.data - a.data);

		// 정렬된 TestResultByType 데이터를 문자열로 변환
		const resultByType = dataByType
			.map((item, idx, arr) => {
				const prefix =
					idx > 0
						? item.data < arr[idx - 1].data
							? ' > '
							: item.data === arr[idx - 1].data
								? ' = '
								: ''
						: '';
				return `${prefix}${item.kor}(${item.data})`;
			})
			.join('');
		setTypeAddText(resultByType);
	}, [test]);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleCopy = async () => {
		if (textAreaRef.current) {
			try {
				// textarea의 value를 사용하여 클립보드에 복사
				await navigator.clipboard.writeText(textAreaRef.current.value);
				alert('Text copied to clipboard!');
			} catch (err) {
				console.error('Failed to copy: ', err);
			}
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
				<textarea
					ref={textAreaRef}
					readOnly // Make the textarea non-editable
					value={`${text}\n\n${typeAddText}`} // Add line breaks between text and typeAddText
					className="resize-none bg-transparent border-none p-2 h-auto text-gray-700 w-full  focus:outline-none focus:ring-0"
					rows={4} // Adjust the height as needed
				/>
			</div>
		</div>
	);
};

export default CopyableResult;
