'use client';
import { useRouter } from 'next/navigation';

export default function Main() {
	const route = useRouter();
	const navigateToTestResult = () => {
		route.push('/test-result');
	};
	return (
		<main className="flex  flex-col items-center justify-between p-12">
			<div className="flex flex-col gap-4">
				<ul className="flex flex-col gap-4 mb-8">
					<li id="1" className="flex gap-4 items-center justify-center">
						<span>A</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="2" className="flex gap-4 items-center justify-center">
						<span>B</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="3" className="flex gap-4 items-center justify-center">
						<span>C</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="4" className="flex gap-4 items-center justify-center">
						<span>D</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="5" className="flex gap-4 items-center justify-center">
						<span>E</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="6" className="flex gap-4 items-center justify-center">
						<span>F</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="7" className="flex gap-4 items-center justify-center">
						<span>G</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="8" className="flex gap-4 items-center justify-center">
						<span>H</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
					<li id="9" className="flex gap-4 items-center justify-center">
						<span>I</span>
						<span>
							<input
								id="price"
								name="price"
								type="text"
								placeholder="0"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</span>
					</li>
				</ul>

				<button
					className="w-full p-2 bg-indigo-600 text-white rounded-md"
					onClick={navigateToTestResult}
				>
					확인
				</button>
			</div>
		</main>
	);
}
