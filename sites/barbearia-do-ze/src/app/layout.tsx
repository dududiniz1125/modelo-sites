import type { Metadata, Viewport } from "next"
import { Limelight, Work_Sans } from "next/font/google"

import { site } from "@/config/site"
import { MotionProvider } from "@/components/motion-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const sans = Work_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" })
const heading = Limelight({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.nome, template: `%s | ${site.nome}` },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: site.nome,
    description: site.descricao,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17110d",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${heading.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
        <WhatsAppButton />
      </body>
    </html>
  )
}
