import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from 'next/font/google'
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
export const metadata: Metadata = {
  title: "Notion",
  description: "Notify yourself",
};

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <ConvexAuthNextjsServerProvider>
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
      {children}
      </body>
    </html>
 </ConvexAuthNextjsServerProvider>
  )
}
