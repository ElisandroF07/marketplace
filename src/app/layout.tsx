import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Body from '@/components/body'

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
			<Body className={inter.className}>{children}</Body>
		</html>
	)
}
