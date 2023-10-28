'use client'

import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import google from '@/assets/images/googleLogo.jpg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SignNegationAlert from '@/components/shared/signNegationAlert'
import { TailSpin } from 'react-loader-spinner'

const createUserSchema = z.object({
	email: z
		.string()
		.nonempty('O email é obrigatório')
		.min(1, { message: 'O email é obrigatório' })
		.email({
			message: 'Introduza um email válido',
		})
		.transform((email) => {
			return email.trim().toLowerCase()
		}),
	password: z
		.string()
		.nonempty('A senha é obrigatória')
		.min(6, 'A senha precisa ter mais de 6 caracteres'),
})

type CreateUserFormData = z.infer<typeof createUserSchema>

export default function SignUpForm() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateUserFormData>({
		resolver: zodResolver(createUserSchema),
	})

	interface dataType {
		email: string
		password: string
	}

	async function login({ email, password }: dataType) {
		setIsLoading(true)
		const signInResult = await signIn('credentials', {
			email,
			password,
			redirect: false,
		})
		if (signInResult?.error) {
			setIsLoading(false)
			const signAlert = document.querySelector('#signAlert') as HTMLDivElement
			signAlert.style.right = '20px'
			setTimeout(() => {
				signAlert.style.right = '-300px'
			}, 3000)
			return
		}
		else {
			setIsLoading(false)
			router.replace('/dashboard')
		}
		
	}


	return (
		<form
			onSubmit={handleSubmit(login)}
			className="mt-[43px] flex flex-col gap-[13px]">
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
					placeholder="Introduza a sua senha"
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
			<div className="inputControl flex gap-[10px] items-center justify-end ">
				<Link
					className="checkBox text-[#ff6a6a] font-[300] text-[13px]"
					href={'/signIn'}>
					Esqueceu a sua senha?
				</Link>
			</div>
			<button
				type="submit"
				disabled={isLoading}
				className="signButton w-full h-[45px] bg-[var(--focus-color)] rounded-[11px] text-[#fff] mt-[35px] text-[14px] flex items-center justify-center">
				{isLoading ? <TailSpin
					height="25"
					width="25"
					color="#fff"
					ariaLabel="tail-spin-loading"
					radius="1"
					visible={true}
				/> : "Entrar"}
			</button>
			<div className="flex items-center justify-center mt-[10px] mb-[10px]">
				<div className="w-[80%] h-[.8px] bg-[var(--text-secondaryColor)] opacity-50"></div>
				<div className="w-full text-center text-[var(--text-secondaryColor)] text-[13px]  opacity-80">
					Ou entar com
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
				<p className="w-full text-center mt-[20px] text-[13px] mb-[20px] text-[var(--text-primaryColor)] font-[300]">
					Ainda não tem uma conta?{' '}
					<Link href="/auth/sign-up" className="text-[var(--focus-color)]">
						Criar conta
					</Link>
				</p>
			</div>
			<SignNegationAlert text="Email ou Senha inválidos!" />
		</form>
	)
}
