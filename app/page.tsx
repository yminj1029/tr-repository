'use client';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
	const token: boolean = true;
	const router = useRouter();

	useLayoutEffect(() => {
		if (token === true) {
			router.replace('/main');
		}
	}, [token, router]); // Add token and router as dependencies

	return (
		<main className="flex flex-col items-center justify-between p-12">
			환영합니다.
		</main>
	);
}
