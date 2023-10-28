import ButtonLogout from '@/components/logOutButton'
import nextAuthOptions from '@/libs/nextAuthOptions'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import buildSVG from '@/assets/images/buildSVG.svg'

export default async function Dashboard() {
	const session = await getServerSession(nextAuthOptions)

	return (
		<div className="w-full h-full relative flex items-center justify-center flex-col">
			<Image src={buildSVG} alt="buildSVG" className="w-[80%] " />
			<div>
				<h1
					className="font-[500] text-[28px] w-[70%] mt-[50px] text-[var(--text-primaryColor)]"
					style={{ lineHeight: '20px' }}>
					Olá {session?.user.name[0]}.
				</h1>
				<p className="font-[200] text-[14px] mt-[10px] text-[var(--text-primaryColor)]">
					Bem vindo à Marketplace, o mundo nas suas mãos. Como vês, estamos
					adicionando recursos para oferecer a melhor experiencia digital
					possivel. Coisas boas vêem em sua direção... 😉
				</p>
			</div>
			<ButtonLogout />
		</div>
	)
}
