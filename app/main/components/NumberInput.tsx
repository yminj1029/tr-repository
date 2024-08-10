import React from 'react';
import { Input } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';
// NumberInput 컴포넌트에서 사용할 props의 타입 정의
interface NumberInputProps {
	typeData: string;
}

// const handleNumberInput = (val: string) => {
// 	console.log('hi', val);
// };
const NumberInput: React.FC<NumberInputProps> = ({ typeData }) => {
	const parseTypeData = typeData.split(' ');
	const placeholderText = `${parseTypeData[1]}번을 입력하세요.`;

	const [inputValue, setInputValue] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// 숫자만 허용
		if (/^\d*$/.test(value)) {
			setInputValue(value); // 상태 업데이트
			// test(value); // 숫자 값만 전달
		}
	};

	return (
		<Input
			color="indigo"
			size="lg"
			variant="outlined"
			labelProps={{
				className: 'hidden',
			}}
			placeholder={placeholderText}
			className="!border-blue-gray-200 focus:!border-indigo-500 focus:!border-t-indigo-500 "
			value={inputValue}
			onChange={handleChange}
		/>
	);
};

export default NumberInput;
