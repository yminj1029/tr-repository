import React from 'react';
import { Button } from '@material-tailwind/react';

// 자식 컴포넌트에서 사용할 props의 타입 정의
interface ChildComponentProps {
	onButtonClick: () => void;
}

const DetailButton: React.FC<ChildComponentProps> = ({ onButtonClick }) => {
	return (
		//@ts-ignore
		<Button
			className="w-40"
			variant="gradient"
			size="lg"
			onClick={onButtonClick}
			color="indigo"
		>
			상세보기
		</Button>
	);
};

export default DetailButton;
