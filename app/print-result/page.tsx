'use client';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import dynamic from 'next/dynamic';

// 클라이언트 전용 컴포넌트를 비동기로 로드
const PDFDownloadButton = dynamic(
	() => import('./components/PDFDownloadButton'),
	{
		ssr: false, // 서버 사이드 렌더링 비활성화
	},
);

const MyApp: React.FC = () => {
	useEffect(() => {
		const container = document.getElementById('root');
		if (container) {
			const root = createRoot(container);
			root.render(<MyApp />);
		}
	}, []); // 빈 배열을 전달하여 첫 렌더링 후에만 실행되도록 함

	return (
		<div>
			<h1>Convert React Component to PDF</h1>
			<PDFDownloadButton />
		</div>
	);
};

export default MyApp;
