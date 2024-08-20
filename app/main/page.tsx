'use client';
import { useRouter } from 'next/navigation';
import NumberInput from './components/NumberInput';
import CopyableResult from './components/CopyableResult';
import DetailButton from './components/DetailButton';

export default function Main() {
	const route = useRouter();
	const navigateToTestResult = () => {
		route.push('/test-result');
	};
	return (
		<main className="flex  flex-col items-center p-12">
			<div className="flex flex-col gap-4">
				<ul className="w-max-content flex flex-shrink-0 flex-wrap gap-8 mb-8 overflow-hidden">
					{Array.from({ length: 9 }, (_, index) => (
						<li
							key={index + 1}
							id={`${index + 1}`}
							className="w-max-content flex gap-4 items-center justify-center"
						>
							<span>{`TYPE ${index + 1}`}</span>
							<span>
								<NumberInput typeData={`TYPE ${index + 1}`} />
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full mb-8">
				<CopyableResult />
			</div>
			<div className="w-full flex flex-col items-start gap-2 mb-8">
				<span>Click the button for more details.</span>
				<DetailButton onButtonClick={navigateToTestResult} />
			</div>
		</main>
	);
}
