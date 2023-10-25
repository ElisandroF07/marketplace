"use client"

import { SessionProvider } from "next-auth/react";
import { ProgressLoader } from "nextjs-progressloader";
import { ReactNode } from "react";

export default function Body({children, className}: {children: ReactNode, className: any}) {
    return(
        <body className={className}>
				<ProgressLoader showSpinner={false} shadow={false} />
				<SessionProvider>{children}</SessionProvider>
		</body>
    )
}