import type { Metadata } from 'next'
import './globals.css'
import MainHeader from '@/components/Home/MainHeader'
import TopContactBanner from '@/components/Home/TopContactBanner'

export const metadata: Metadata = {
  title: 'SKY VISA',
  description: 'SKY VISA - Your Gateway to the World',
  generator: 'Radsting Dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <TopContactBanner />
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
