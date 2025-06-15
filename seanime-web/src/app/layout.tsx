
import { TauriManager } from "@/app/(main)/_tauri/tauri-manager"
import { ClientProviders } from "@/app/client-providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import React from "react"

export const dynamic = "force-static"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Herox",
    description: "Self-hosted, user-friendly media server for anime and manga.",
    icons: {
        icon: "/icons/favicon1.ico",
    },
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* ✅ Google Analytics */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-80HXY8F3LG"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-80HXY8F3LG');
                `}
            </Script>
            <link rel="icon" href="/icons/favicon1.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="/icons/favicon1.ico" type="image/x-icon" />
            {/*{process.env.NODE_ENV === "development" && <script src="https://unpkg.com/react-scan/dist/auto.global.js" async></script>}*/}
        </head>
        <body className={inter.className} suppressHydrationWarning>
        {/*{process.env.NODE_ENV === "development" && <script src="http://localhost:8097"></script>}*/}
        <ClientProviders>
            {process.env.NEXT_PUBLIC_PLATFORM === "desktop" && <TauriManager />}
            {children}
        </ClientProviders>
        </body>
        </html>
    )
}
