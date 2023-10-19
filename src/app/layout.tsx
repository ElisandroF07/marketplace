import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import shoppingSvg from '@/assets/images/shoppingSVG.svg';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Marketplace',
	description: 'Compre e venda os seus artigos.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-PT">
			<body className={inter.className}>
				<main className="main h-full">
					<div className="aside">
						<div className="asideTop">
							<h1
								className="font-[500] text-[28px] w-[70%] mt-[40px] text-[var(--text-primaryColor)]"
								style={{ lineHeight: '20px' }}>
								{' '}
								Marketplace
							</h1>
							<p className="font-[200] text-[14px] mt-[10px] text-[var(--text-secondaryColor)]">
								A sua plataforma online para compra e venda de artigos, entre
								para poder usufruir todos os serviços que oferecemos à você.
							</p>
						</div>
						<Image
							className="asideImage"
							src={shoppingSvg}
							alt="shopping"
						/>
					</div>
					<div className="content h-full">{children}</div>
				</main>
			</body>
		</html>
	);
}
