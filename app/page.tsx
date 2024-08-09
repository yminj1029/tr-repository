'use client';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
	const token: Boolean = true;
	const route = useRouter();
	useLayoutEffect(() => {
		if (token === true) {
			return route.replace('/main');
		}
	}, []);
	console.log(route);
	return (
		<main className="flex  flex-col items-center justify-between p-12">
			환영합니다.
		</main>
	);
}
