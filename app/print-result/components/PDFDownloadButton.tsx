// PDFDownloadButton.tsx
'use client'; // 클라이언트 전용 컴포넌트로 명시

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const PDFDownloadButton: React.FC = () => (
	<PDFDownloadLink document={<MyDocument />} fileName="mypdf.pdf">
		{({ blob, url, loading, error }) =>
			loading ? 'Loading document...' : 'Download PDF'
		}
	</PDFDownloadLink>
);

export default PDFDownloadButton;
