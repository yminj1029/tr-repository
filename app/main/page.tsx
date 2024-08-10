'use client';
import { useRouter } from 'next/navigation';
import NumberInput from './components/NumberInput';
import CopyableResult from './components/CopyableResult';
import DetailButton from './components/DetailButton';

export default function Main() {
	const route = useRouter();
	const navigateToTestResult = () => {
		// route.push('/test-result');
	};
	return (
		<main className="flex  flex-col items-center p-12">
			<div className="flex flex-col gap-4">
				<ul className="w-fit flex flex-wrap gap-8 mb-8 ">
					<li id="1" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 1</span>
						<span>
							<NumberInput typeData="TYPE 1" />
						</span>
					</li>
					<li id="2" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 2</span>
						<span>
							<NumberInput typeData="TYPE 2" />
						</span>
					</li>
					<li id="3" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 3</span>
						<span>
							<NumberInput typeData="TYPE 3" />
						</span>
					</li>
					<li id="4" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 4</span>
						<span>
							<NumberInput typeData="TYPE 4" />
						</span>
					</li>
					<li id="5" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 5</span>
						<span>
							<NumberInput typeData="TYPE 5" />
						</span>
					</li>
					<li id="6" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 6</span>
						<span>
							<NumberInput typeData="TYPE 6" />
						</span>
					</li>
					<li id="7" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 7</span>
						<span>
							<NumberInput typeData="TYPE 7" />
						</span>
					</li>
					<li id="8" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 8</span>
						<span>
							<NumberInput typeData="TYPE 8" />
						</span>
					</li>
					<li id="9" className="w-fit flex gap-4 items-center justify-center">
						<span>TYPE 9</span>
						<span>
							<NumberInput typeData="TYPE 9" />
						</span>
					</li>
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
