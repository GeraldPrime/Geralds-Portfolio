import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gerald Okeke — Senior Software Engineer',
  description: 'Senior Software Engineer specializing in Flutter, mobile, web, and enterprise platforms. Based in Malta.',
  keywords: ['Gerald Okeke', 'software engineer', 'Flutter developer', 'mobile developer', 'full stack', 'Malta'],
  authors: [{ name: 'Gerald Okeke' }],
  openGraph: {
    title: 'Gerald Okeke — Senior Software Engineer',
    description: 'Senior Software Engineer based in Malta. Flutter, Django, AWS, Next.js.',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neu-bg min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
