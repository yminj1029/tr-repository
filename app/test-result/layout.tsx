import React from 'react';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen">
			<div className="min-h-screen flex-auto flex flex-col">{children}</div>
		</div>
	);
}
