"use client"

import {useRouter} from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	
	const router = useRouter()
	useEffect(()=>{
		router.replace('/auth/sign-in')
	})

	return null;
}

// <>
		// 	<div className="w-full h-full flex flex-col gap-4 items-center justify-center">
		// 		<h1 className="text-[var(--text-primaryColor)] text-[30px] font-[500]">
		// 			Marketplace
		// 		</h1>
		// 		<div className="item">
		// 			<i className="loader --4"></i>
		// 		</div>
		// 	</div>
		// </>
