import nextAuthOptions from "@/libs/nextAuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function PrivateLayoute({children}: {children: ReactNode}) {
    const session = await getServerSession(nextAuthOptions)
    if (!session) {
        redirect('/auth/sing-in')
    }
    return (<main className="w-full h-full px-[20px]">
        {children}
    </main>)
}