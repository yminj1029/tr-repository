'use client';

import { Provider, createStore } from 'jotai';
import { ReactNode, useEffect, useState } from 'react';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';

const customStore = createStore();

interface ProvidersProps {
	children: ReactNode;
}

export const JotaiProvider = ({ children }: ProvidersProps) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			setIsClient(true);
		}
	}, []);

	return (
		<Provider store={customStore}>
			{isClient && <DevTools />}
			{children}
		</Provider>
	);
};
