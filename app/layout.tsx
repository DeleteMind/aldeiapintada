import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';

const openSans = Open_Sans({
	variable: '--font-open-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Aldeia Pintada',
	description: 'Uma Aldeia da torre',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-PT'>
			<body
				className={`${openSans.variable} antialiased font-sans min-h-screen flex flex-col`}
			>
				<div className='grow'>{children}</div>

				<Footer />
			</body>
		</html>
	);
}
