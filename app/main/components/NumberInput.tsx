import React, { useRef } from 'react';
import { Input } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';
import { useAtom } from 'jotai';
import { updateTestAtom } from '@/atom/testAtom';
// NumberInput 컴포넌트에서 사용할 props의 타입 정의
interface NumberInputProps {
	typeData: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ typeData }) => {
	const [, updateTest] = useAtom(updateTestAtom);

	const parseTypeData = typeData.split(' ');
	const placeholderText = `${parseTypeData[1]}번을 입력하세요.`;

	const [inputValue, setInputValue] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value.length > 2) {
			return;
		}
		// 숫자만 허용
		if (/^\d*$/.test(value)) {
			const valueToNumber = Number(value);
			if (valueToNumber > 45) {
				alert('45까지 입력 가능합니다.');
				return;
			}
			setInputValue(value); // 상태 업데이트

			const resultData = {
				typeNumber: Number(parseTypeData[1]),
				result: valueToNumber,
			};
			updateTest(resultData); //  atom에 저장숫자 값만 전달
		}
	};

	return (
		//@ts-ignore
		<Input
			inputMode="numeric" // 숫자 입력 모드로 설정
			tabIndex={Number(parseTypeData[1])}
			color="indigo"
			size="lg"
			variant="outlined"
			labelProps={{
				className: 'hidden',
			}}
			placeholder={placeholderText}
			className="!text-base !border-blue-gray-200 focus:!border-indigo-500 focus:!border-t-indigo-500 "
			value={inputValue}
			onChange={handleChange}
		/>
	);
};

export default NumberInput;
