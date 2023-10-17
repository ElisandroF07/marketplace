'use client';

import { useEffect } from 'react';
import RedirectLink from '@/components/shared/RedirectLink';

export default function Home() {
	useEffect(() => {
		setTimeout(() => {
			let redirectLink = document.querySelector(
				'#redirectToSignUp'
			) as HTMLLinkElement;
			redirectLink?.click();
		}, 3000);
	}, []);

	return (
		<>
			<div className="w-full h-full flex flex-col gap-4 items-center justify-center">
				<h1 className="text-[var(--text-primaryColor)] text-[30px] font-[500]">
					Marketplace
				</h1>
				<div className="preloader"></div>
			</div>
			<RedirectLink
				id="redirectToSignUp"
				href="signup"
			/>
		</>
	);
}
