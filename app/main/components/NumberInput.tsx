import React from 'react';
import { Input } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';
import { useAtom } from 'jotai';
import { testAtom, updateTestAtom } from '@/atom/testAtom';
// NumberInput 컴포넌트에서 사용할 props의 타입 정의
interface NumberInputProps {
	typeData: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ typeData }) => {
	const [test, setTest] = useAtom(testAtom);
	const [, updateTest] = useAtom(updateTestAtom);

	const parseTypeData = typeData.split(' ');
	const placeholderText = `${parseTypeData[1]}번을 입력하세요.`;

	const [inputValue, setInputValue] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// 숫자만 허용
		if (/^\d*$/.test(value)) {
			setInputValue(value); // 상태 업데이트

			const resultData = {
				typeNumber: parseInt(parseTypeData[1]),
				result: parseInt(value),
			};
			updateTest(resultData); //  atom에 저장숫자 값만 전달
		}
	};

	return (
		//@ts-ignore
		<Input
			color="indigo"
			size="lg"
			variant="outlined"
			labelProps={{
				className: 'hidden',
			}}
			placeholder={placeholderText}
			className="text-lg !border-blue-gray-200 focus:!border-indigo-500 focus:!border-t-indigo-500 "
			value={inputValue}
			onChange={handleChange}
		/>
	);
};

export default NumberInput;
