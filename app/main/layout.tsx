import Header from '@/components/Header';
import SideNavigation from '@/components/SideNavigation';
import React from 'react';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen">
			<SideNavigation />
			<div className="min-h-screen flex-auto flex flex-col">
				<Header />
				{children}
			</div>
		</div>
	);
}
