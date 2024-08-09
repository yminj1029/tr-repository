import React from 'react';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SideNavigation from '@/components/SideNavigation';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TR Admin',
	description: 'Admin for Trainer Reports Repository',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex h-screen">
				{/* <SideNavigation /> */}
				<div className="min-h-screen flex-auto flex flex-col">
					{/* <Header /> */}
					{children}
				</div>
			</body>
		</html>
	);
}
