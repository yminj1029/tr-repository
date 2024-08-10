'use client';
import { useRouter } from 'next/navigation';
import NumberInput from './components/NumberInput';

export default function Main() {
	const route = useRouter();
	const navigateToTestResult = () => {
		route.push('/test-result');
	};
	return (
		<main className="flex  flex-col items-center p-12">
			<div className="flex flex-col gap-4">
				<ul className="flex flex-wrap gap-8 mb-8">
					<li id="1" className="flex gap-4 items-center justify-center">
						<span>TYPE 1</span>
						<span>
							<NumberInput typeData="TYPE 1" />
						</span>
					</li>
					<li id="2" className="flex gap-4 items-center justify-center">
						<span>TYPE 2</span>
						<span>
							<NumberInput typeData="TYPE 2" />
						</span>
					</li>
					<li id="3" className="flex gap-4 items-center justify-center">
						<span>TYPE 3</span>
						<span>
							<NumberInput typeData="TYPE 3" />
						</span>
					</li>
					<li id="4" className="flex gap-4 items-center justify-center">
						<span>TYPE 4</span>
						<span>
							<NumberInput typeData="TYPE 4" />
						</span>
					</li>
					<li id="5" className="flex gap-4 items-center justify-center">
						<span>TYPE 5</span>
						<span>
							<NumberInput typeData="TYPE 5" />
						</span>
					</li>
					<li id="6" className="flex gap-4 items-center justify-center">
						<span>TYPE 6</span>
						<span>
							<NumberInput typeData="TYPE 6" />
						</span>
					</li>
					<li id="7" className="flex gap-4 items-center justify-center">
						<span>TYPE 7</span>
						<span>
							<NumberInput typeData="TYPE 7" />
						</span>
					</li>
					<li id="8" className="flex gap-4 items-center justify-center">
						<span>TYPE 8</span>
						<span>
							<NumberInput typeData="TYPE 8" />
						</span>
					</li>
					<li id="9" className="flex gap-4 items-center justify-center">
						<span>TYPE 9</span>
						<span>
							<NumberInput typeData="TYPE 9" />
						</span>
					</li>
				</ul>
			</div>
			<div>복사란...</div>
			<button
				className="p-2 bg-indigo-600 text-white rounded-md"
				onClick={navigateToTestResult}
			>
				확인
			</button>
		</main>
	);
}
