'use client';

import { useEffect } from 'react';
import SignUpForm from '@/components/signup/SignUpForm';
import FormHeader from '@/components/shared/FormHeader';

declare global {
	interface Window {
		gapi: any;
	}
}

type userDataType = {
	[key: string]: string;
};

const CLIENT_ID = '838474632269-k97u1p4di3gsamjkekrn66n18k259s89.apps.googleusercontent.com';

export default function SignUp() {
	useEffect(() => {
		window.gapi?.load('client:auth2', () => {
			const auth2 = window.gapi.auth2.init({
				clientId: CLIENT_ID,
				scope: 'profile email',
				plugin_name: 'marketplace',
			});
			auth2.attachClickHandler(
				document.getElementById('customGoogleSignInButton'),
				{},
				(googleUser: any) => {
					const currentUser: userDataType = {
						firstName: googleUser.getBasicProfile().getGivenName(),
						lastName: googleUser.getBasicProfile().getFamilyName(),
						pictureUrl: googleUser.getBasicProfile().getImageUrl(),
						email: googleUser.getBasicProfile().getEmail(),
						googleId: googleUser.getBasicProfile().getId(),
					};
					// localStorage.setItem('currentUser', JSON.stringify(currentUser));
				},
				(error: any) => {
					console.log(
						'Ocorreu um erro ao se conectar com a API do Google: ',
						error
					);
				}
			);
		});
	}, []);

	return (
		<>
			
			<main className="bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]">
				<FormHeader
					title="Criar Conta"
					subtitle="Compre e venda no conforto do seu lar!"
				/>
				<SignUpForm />
				<script
					src="https://apis.google.com/js/api:client.js"
					async
					defer></script>
			</main>
		</>
	);
}
