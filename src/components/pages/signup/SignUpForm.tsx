'use client'

import React, { useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import google from '@/assets/images/googleLogo.jpg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import RedirectLink from '../../shared/RedirectLink'

const createUserSchema = z.object({
	name: z
		.string()
		.nonempty('O nome de usuário é obrigatório')
		.transform((name) => {
			return name
				.trim()
				.split(' ')
				.map((word) => {
					return word[0].toLocaleUpperCase().concat(word.substring(1))
				})
		}),
	email: z
		.string()
		.min(1, { message: 'O email é obrigatório' })
		.email({
			message: 'Introduza um email válido',
		})
		.transform((email) => {
			return email.trim().toLowerCase()
		}),
	password: z.string().min(6, 'A senha precisa ter mais de 6 caracteres'),
	isConditionsAccepted: z.literal<boolean>(true, {
		errorMap: () => ({ message: 'Você deve aceitar os termos e condições' }),
	}),
})

type CreateUserFormData = z.infer<typeof createUserSchema>

export default function SignUpForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateUserFormData>({
		resolver: zodResolver(createUserSchema),
	})

	function saveData(data: any) {
		console.log(data)
		let redirectLink = document.querySelector(
			'#redirectLink'
		) as HTMLLinkElement
		redirectLink?.click()
	}

	return (
		<form
			onSubmit={handleSubmit(saveData)}
			className="mt-[43px] flex flex-col gap-[13px]">
			<div className="inputControl flex flex-col gap-[5px] relative">
				<label
					htmlFor="name"
					className="font-[500] text-[13px] text-[var(--text-primaryColor)]">
					Nome
				</label>
				<input
					className="input w-full h-[50px] rounded-[11px] outline-none pl-[24px] pr-[24px]"
					type="text"
					placeholder="Introduza o seu nome"
					{...register('name')}
				/>
				{errors.name && (
					<p className="textPWD transition-colors duration-300 text-[13px] text-red-500">
						{errors.name.message}
					</p>
				)}
			</div>
			<div className="inputControl flex flex-col gap-[5px] relative">
				<label
					htmlFor="email"
					className="font-[500] text-[13px] text-[var(--text-primaryColor)]">
					Email
				</label>
				<input
					className="input w-full h-[50px] rounded-[11px] outline-none pl-[24px] pr-[24px]"
					type="email"
					placeholder="Introduza o seu email"
					{...register('email')}
				/>
				{errors.email && (
					<p className="textPWD  transition-colors duration-300 text-[13px] text-red-500">
						{errors.email.message}
					</p>
				)}
			</div>
			<div className="inputControl flex flex-col gap-[5px] relative">
				<label
					htmlFor="password"
					className="font-[500] text-[13px] text-[var(--text-primaryColor)]">
					Senha
				</label>
				<input
					className="input w-full h-[50px] rounded-[11px] outline-none pl-[24px] pr-[24px]"
					type="password"
					placeholder="Crie uma senha"
					{...register('password')}
				/>
				{errors.password && (
					<p className="textPWD  transition-colors duration-300 text-[13px] text-red-500">
						{errors.password.message}
					</p>
				)}

				<div className="flex w-full items-center justify-between">
					<div
						className="progressPWD w-[0%] h-[6px] rounded transition-all duration-300 bg-red-500"
						style={{ border: '0px solid #aaa' }}></div>
					<p className="textPWD font-semibold transition-colors duration-300 text-[13px] text-red-500"></p>
				</div>
			</div>
			<div className="inputControl flex gap-[10px] items-center justify-start">
				<input
					type="checkbox"
					className="w-[20px] h-[20px] rounded-[12px] border-[var(--text-secondaryColor)]"
					{...register('isConditionsAccepted')}
				/>
				<label
					htmlFor="password"
					className="checkBox text-[var(--text-primaryColor)] font-[500] text-[13px]">
					Eu aceito os termos e condições
				</label>
			</div>
			{errors.isConditionsAccepted && (
				<p className="textPWD  transition-colors duration-300 text-[13px] text-red-500">
					{errors.isConditionsAccepted.message}
				</p>
			)}
			<button
				type="submit"
				className="signButton w-full h-[45px] bg-[var(--focus-color)] rounded-[11px] text-[#fff] mt-[35px] text-[14px]">
				Criar Conta
			</button>
			<div className="flex items-center justify-center mt-[10px] mb-[10px]">
				<div className="w-[80%] h-[.8px] bg-[var(--text-secondaryColor)] opacity-50"></div>
				<div className="w-full text-center text-[var(--text-secondaryColor)] text-[13px]  opacity-80">
					Ou criar conta com
				</div>
				<div className="w-[80%] h-[.8px] bg-[var(--text-secondaryColor)] opacity-50"></div>
			</div>
			<div className="flex justify-between">
				<button
					type="button"
					className="signOptions w-[48%] h-[45px] rounded-[11px] flex items-center justify-center gap-[10px]">
					<FaFacebook className="text-[#1877F2] w-[20px] h-[20px]" />
					<p className="text-[var(--text-primaryColor)] font-[400] text-[14px]">
						Facebook
					</p>
				</button>
				<button
					id="customGoogleSignInButton"
					type="button"
					className="signOptions w-[48%] h-[45px] rounded-[11px] flex items-center justify-center gap-[10px]">
					<Image src={google} alt="google" className="w-[20px] h-[20px]" />
					<p className="text-[var(--text-primaryColor)] font-[400] text-[14px]">
						Google
					</p>
				</button>
			</div>
			<div className="w-full flex items-center justify-center">
				<p className="w-full text-center mt-[20px] text-[13px] mb-[40px] text-[var(--text-primaryColor)] font-[300]">
					Já tem uma conta?{' '}
					<Link href="/auth/sign-in" className="text-[var(--focus-color)]">
						Entrar
					</Link>
				</p>
			</div>
		</form>
	)
}
