import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/config/material-tailwind-them-provider';
import { JotaiProvider } from '@/config/jotai-provider';

const inter = Inter({ subsets: ['latin'] });

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
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
					integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body className="flex h-screen">
				<ThemeProvider>
					<JotaiProvider>
						{children}
						{/* <div className="min-h-screen flex-auto flex flex-col">{children}</div> */}
					</JotaiProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
