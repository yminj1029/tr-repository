import React from 'react';

export default function TestResultLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen flex-col">
			{/* <div>title</div>
			<div>name</div>
			<div>기타 정보</div> */}
			{/* chart 1 막대*/}
			{/* 주 애니어 정보 */}
			{/* chart 2  레이더*/}
			<div className="min-h-screen">{children}</div>
		</div>
	);
}
