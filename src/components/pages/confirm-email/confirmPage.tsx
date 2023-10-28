'use client'

import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import Image from 'next/image'
import mailSVG from '@/assets/images/mailSVG.svg'
import Link from 'next/link'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'
import SignNegationAlert from '@/components/shared/signNegationAlert'

export default function ConfirmEmailPage({ email }: { email: string }) {
	const [seconds, setSeconds] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	let sec = 0
	const [alertText, setAlertText] = useState<string>('')
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	function startTimer() {
		setIsDisabled(true)
		setSeconds(30)
		sec = 30
		let verifyButton = document.querySelector(
			'#verifyButton'
		) as HTMLButtonElement
		verifyButton.style.backgroundColor = 'var(--text-secondaryColor)'
		const secondsInterval = setInterval(() => {
			--sec
			setSeconds(sec)
			if (sec === 0) {
				setIsDisabled(false)
				clearInterval(secondsInterval)
				let verifyButton = document.querySelector(
					'#verifyButton'
				) as HTMLButtonElement
				verifyButton.style.backgroundColor = 'var(--focus-color)'
			}
		}, 1000)
	}

	function reSendEmail() {
		setIsLoading(true)
		let baseUrl = process.env.API_BASE_URL
		let resendEmailEndpoint = process.env.RESEND_EMAIL_ENDPOINT
		let uri = `${baseUrl}${resendEmailEndpoint}`
		axios
			.get(`https://marketplace-api-rtxc.onrender.com/auth/resend-email/${email}`)
			.then((response) => {
				setIsLoading(false)
				if (response.status === 201) {
					startTimer()
				}
			})
			.catch((error) => {
				setIsLoading(false)
				if (error.response.status === 422) {
					setAlertText('O email já foi confirmado!')
					const signAlert = document.querySelector(
						'#signAlert'
					) as HTMLDivElement
					signAlert.style.right = '20px'
					setTimeout(() => {
						signAlert.style.right = '-300px'
					}, 3000)
				} else if (error.response.status === 404) {
					setAlertText('Email não encontrado!')
					const signAlert = document.querySelector(
						'#signAlert'
					) as HTMLDivElement
					signAlert.style.right = '20px'
					setTimeout(() => {
						signAlert.style.right = '-300px'
					}, 3000)
				}
			})
	}

	return (
		<div className="px-[15px] w-full h-full">
			<div className="flex items-center justify-start mt-[30px]">
				<Link href={'/auth/sign-up'}>
					<FaAngleLeft className="text-[var(--icon-background)] w-[25px] h-[25px]" />
				</Link>
				<h1
					className="font-[500] text-[16px] w-full text-center text-[var(--text-primaryColor)]"
					style={{ lineHeight: '20px' }}>
					{' '}
					Verificação do email
				</h1>
			</div>
			<div className="w-full mt-[120px] px-[15px] flex flex-col items-center justify-center">
				<Image src={mailSVG} alt="mail" className="w-[100%]" />
				<h1
					className="font-[500] text-[28px] mt-[20px] w-full  text-[var(--text-primaryColor)]"
					style={{ lineHeight: '30px' }}>
					Verifique o seu endereço de email
				</h1>
				<p className="font-[300] text-[14px] mt-[5px] text-[var(--text-secondaryColor)]">
					Obrigado por se cadastar! Enviamos um link para o seu endereço de
					email para concluir o seu cadastro.
				</p>
			</div>
			<div className="mt-[30px] px-[15px]">
				<button
					id="verifyButton"
					type="button"
					disabled={isDisabled}
					onClick={reSendEmail}
					className=" w-full h-[45px] flex items-center justify-center bg-[var(--focus-color)] outline-none rounded-[11px] transition-colors duration-500 text-[#fff] mt-[35px] text-[14px]">
					{isLoading ? (
						<TailSpin
							height="25"
							width="25"
							color="#fff"
							ariaLabel="tail-spin-loading"
							radius="1"
							visible={true}
						/>
					) : isDisabled ? (
						'Email enviado'
					) : (
						'Reenviar email'
					)}
				</button>
				<p className="w-full text-center mt-[20px] text-[13px] mb-[20px] text-[var(--text-primaryColor)] font-[300]">
					Não recebeu o emai? Reenvie em {seconds}s
				</p>
			</div>
			<SignNegationAlert text={alertText} key={'SignNegationAlert1'} />
		</div>
	)
}
