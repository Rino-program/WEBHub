import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rino-program Hub | Official Website",
  description: "Rino-program Hubの公式サイト。プロフィール、作品集、SNSリンク、お問い合わせなど。",
  keywords: ["Rino-program Hub", "ポートフォリオ", "プログラマー"],
  authors: [{ name: "Rino-program Hub" }],
  openGraph: {
    title: "Rino-program Hub | Official Website",
    description: "Rino-program Hubの公式サイト",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body className={`${notoSansJP.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
