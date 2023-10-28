"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"

export default function ButtonLogout (){
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    async function logOut(){
        setIsLoading(true)
        await signOut({
            redirect: false
        })
        .then(()=>{
            setIsLoading(false)
            router.replace('/auth/sign-in')
        })
 
    }

    return(
        <button onClick={logOut} disabled={isLoading} className="bg-red-500 w-full h-[45px] rounded-[11px] text-[#fff] mt-[35px] gap-[10px] text-[14px] flex items-center justify-center ">{isLoading ? "Saindo" : "Sair"}   {isLoading && <TailSpin
            height="15"
            width="15"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
        /> } </button>
    )
}