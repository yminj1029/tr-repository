import React, { useRef, useState } from 'react';
import { Textarea } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

const CopyableResult: React.FC = () => {
	const [text, setText] = useState<string>('hihih');
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
		<div className="w-10/12 border border-blue-gray-50 rounded-xl bg-slate">
			<div className="flex border-b border-blue-gray-50 p-1 justify-end items-center">
				<span className="text-sm text-gray-500">
					Copy the brief test result.
				</span>
				{/* @ts-ignore */}
				<IconButton variant="text" onClick={handleCopy}>
					<i className="fa-regular fa-copy"></i>
				</IconButton>
			</div>
			<div
				ref={textAreaRef}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onTouchCancel={handleTouchCancel}
			>
				{text}
			</div>
		</div>
	);
};

export default CopyableResult;
