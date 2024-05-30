import type { Metadata } from "next"
import { Noto_Sans_Mono } from "next/font/google"
import "./globals.css"

const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "achiev3",
    description: "decentralized, permissionless, composable, open source achievement protocol",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={notoSansMono.className}>{children}</body>
        </html>
    )
}
