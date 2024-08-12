'use client';

import { Provider, createStore } from 'jotai';
import { ReactNode } from 'react';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';

const customStore = createStore();

// children의 타입을 ReactNode로 지정합니다.
interface ProvidersProps {
	children: ReactNode;
}

export const JotaiProvider = ({ children }: ProvidersProps) => {
	return (
		<Provider store={customStore}>
			<DevTools store={customStore} />
			{children}
		</Provider>
	);
};
