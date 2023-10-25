'use client'

import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { ProgressLoader } from 'nextjs-progressloader'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Marketplace',
	description: 'Compre e venda os seus artigos.',
}

type RootLayoutProps = {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-PT">
			<body className={inter.className}>
				<ProgressLoader showSpinner={false} shadow={false} />
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	)
}
