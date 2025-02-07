import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import type React from "react" 

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Intraflex",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}

