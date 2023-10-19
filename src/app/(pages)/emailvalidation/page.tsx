'use client';

import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import Image from 'next/image';
import mailSVG from '@/assets/images/mailSVG.svg';
import Link from 'next/link';
import { useEffect } from 'react';

export default function EmailValidation() {
	const [seconds, setSeconds] = useState(0);
	let sec = 0;

	useEffect(() => {
		let verifyButton = document.querySelector(
			'#verifyButton'
		) as HTMLButtonElement;
		verifyButton?.addEventListener('click', startTimer);
	}, []);

	function startTimer() {
		setSeconds(59);
		sec = 59;
		let verifyButton = document.querySelector(
			'#verifyButton'
		) as HTMLButtonElement;
		verifyButton?.removeEventListener('click', startTimer);
		verifyButton.style.backgroundColor = 'var(--text-secondaryColor)';
		const secondsInterval = setInterval(() => {
			--sec;
			setSeconds(sec);
			if (sec === 0) {
				clearInterval(secondsInterval);
				let verifyButton = document.querySelector(
					'#verifyButton'
				) as HTMLButtonElement;
				verifyButton?.addEventListener('click', startTimer);
				verifyButton.style.backgroundColor = 'var(--focus-color)';
			}
		}, 1000);
	}

	return (
		<div className="px-[15px] w-full h-full">
			<div className="flex items-center justify-start mt-[30px]">
				<Link href={'/signup'}>
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
				<Image
					src={mailSVG}
					alt="mail"
					className="w-[100%]"
				/>
				<h1
					className="font-[500] text-[28px] mt-[20px] w-full  text-[var(--text-primaryColor)]"
					style={{ lineHeight: '30px' }}>
					Verifique o seu endereço de email
				</h1>
				<p className="font-[300] text-[14px] mt-[5px] text-[var(--text-secondaryColor)]">
					Obrigado por se cadastar! Você precisa verificar o seu email para
					concluir o cadastro.
				</p>
			</div>
			<div className="mt-[30px] px-[15px]">
				<button
					type="button"
					id="verifyButton"
					className=" w-full h-[45px] bg-[var(--focus-color)] outline-none rounded-[11px] transition-colors duration-500 text-[#fff] mt-[35px] text-[14px]">
					{seconds !== 0 ? 'Email enviado' : 'Verificar email'}{' '}
					
				</button>
				<p className="w-full text-center mt-[20px] text-[13px] mb-[20px] text-[var(--text-primaryColor)] font-[300]">
					Não recebeu o emai? Reenvie em {seconds}s
				</p>
			</div>
			{/* <div className='absolute bottom-[15px] left-0 w-full  flex items-center justify-center'>
            <p className="font-[300] text-[14px] text-[var(--text-secondaryColor)]">
					©️ Marketplace 2023
				</p>
            </div> */}
		</div>
	);
}
