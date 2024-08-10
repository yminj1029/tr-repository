'use client'; // 클라이언트 전용 컴포넌트로 명시

// PDFGenerator.tsx
import React, { useRef } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import DocTest from './DocTest';

const PDFGenerator: React.FC = () => {
	const contentRef = useRef<HTMLDivElement>(null);

	const handleGeneratePDF = () => {
		if (contentRef.current) {
			const element = contentRef.current;
			html2pdf().from(element).save('generated.pdf');
		}
	};

	return (
		<div>
			<div
				ref={contentRef}
				style={{ padding: '20px', backgroundColor: '#f5f5f5' }}
			>
				<h1>This is the content to convert to PDF</h1>
				<p>Additional content goes here...</p>
				<DocTest />
				<svg>
					<rect width="480" height="240" fill="#3d87fb" />
				</svg>
			</div>
			<button onClick={handleGeneratePDF}>Generate PDF</button>
		</div>
	);
};

export default PDFGenerator;
