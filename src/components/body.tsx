'use client'

import { SessionProvider } from 'next-auth/react'
import { ProgressLoader } from 'nextjs-progressloader'
import { ReactNode } from 'react'
import SignNegationAlert from './shared/signNegationAlert'
import { Analytics } from '@vercel/analytics/react'

export default function Body({
	children,
	className,
}: {
	children: ReactNode
	className: any
}) {
	return (
		<body className={className}>
			<ProgressLoader showSpinner={false} shadow={false} />
			<SessionProvider>{children}</SessionProvider>
			<Analytics />
		</body>
	)
}
