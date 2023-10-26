'use client'

import { useEffect } from 'react'
import SignInForm from '@/components/pages/signin/SignInForm'
import FormHeader from '@/components/shared/FormHeader'

declare global {
	interface Window {
		gapi: any
	}
}

const CLIENT_ID =
	'838474632269-k97u1p4di3gsamjkekrn66n18k259s89.apps.googleusercontent.com'

const authInitOptions = {
	clientId: CLIENT_ID,
	scope: 'profile email',
	plugin_name: 'marketplace',
}

export default function SignIn() {
	useEffect(() => {
		window.gapi?.load('client:auth2', () => {
			const auth2 = window.gapi.auth2.init(authInitOptions)

			auth2.attachClickHandler(
				document.getElementById('customGoogleSignInButton'),
				{},
				(googleUser: any) => {
					// const currentUser: userDataType = {
					// 	firstName: googleUser.getBasicProfile().getGivenName(),
					// 	lastName: googleUser.getBasicProfile().getFamilyName(),
					// 	pictureUrl: googleUser.getBasicProfile().getImageUrl(),
					// 	email: googleUser.getBasicProfile().getEmail(),
					// 	googleId: googleUser.getBasicProfile().getId(),
					//}
					// localStorage.setItem('currentUser', JSON.stringify(currentUser));
				},
				(error: any) => {
					console.log('Ocorreu um erro ao se conectar com a API do Google: ')
				}
			)
		})
	}, [])

	return (
		<>
			<div className="bg-[var(--background-body-introduction)] text-[var(--foreground-introduction)] w-full h-full p-[15px]">
				<FormHeader
					title="Entrar"
					subtitle="Compre e venda no conforto do seu lar!"
				/>
				<SignInForm />
				{/* <script
					src="https://apis.google.com/js/api:client.js"
					async
					defer></script>
				<script
					src="https://accounts.google.com/gsi/client"
					async
					defer></script>
				<div

					id="g_id_onload"
					data-client_id={CLIENT_ID}
					data-callback="handleCredentialResponse"></div>
				<div className="g_id_signin" data-width="40" data-type="standard"></div> */}
			</div>
		</>
	)
}
