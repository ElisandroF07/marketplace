import { ReactNode } from 'react'
import Image from 'next/image'
import shoppingSvg from '@/assets/images/shoppingSVG.svg'
import { getServerSession } from 'next-auth'
import nextAuthOptions from '@/libs/nextAuthOptions'
import { redirect } from 'next/navigation'

type AuthLayoutProps = {
	children: ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {

	const session = await getServerSession(nextAuthOptions)
	if (session){
		redirect('/dashboard')
	}
	return (
		<>
			<main className="w-full h-max main relative overflow-x-hidden">
				<section className="aside">
					<div className="asideTop">
						<h1
							className="font-[500] text-[28px] w-[70%] mt-[30px] text-[var(--text-primaryColor)]"
							style={{ lineHeight: '20px' }}>
							{' '}
							Marketplace
						</h1>
						<p className="font-[200] text-[14px] mt-[10px] text-[var(--text-secondaryColor)]">
							A sua plataforma online para compra e venda de artigos, entre para
							poder usufruir todos os serviços que oferecemos à você.
						</p>
					</div>
					<Image
						className="asideImage"
						src={shoppingSvg}
						alt="shopping"
						priority={true}
					/>
				</section>
				<section className="content h-full">{children}</section>
				
			</main>
		</>
	)
}
