import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gerald Okeke — Senior Software Engineer',
  description: 'Gerald Okeke is a Senior Software Engineer based in Malta specializing in Flutter, mobile apps, web development, AI/ML, enterprise ERP systems, and cloud infrastructure. Available for freelance and full-time roles worldwide.',
  keywords: [
    // Name variants
    'Gerald Okeke', 'Gerald', 'Gerald Devs', 'GeraldDev', 'gerald_devs', 'geralddev', 'GeraldPrime',
    // Role titles
    'software developer', 'software engineer', 'senior software engineer', 'full stack developer',
    'full stack engineer', 'developer', 'programmer', 'coder', 'tech lead',
    // Mobile
    'Flutter developer', 'Flutter engineer', 'mobile developer', 'iOS developer', 'Android developer',
    'cross-platform developer', 'React Native developer',
    // Web
    'web developer', 'Next.js developer', 'React developer', 'TypeScript developer',
    'frontend developer', 'backend developer',
    // AI/ML
    'AI developer', 'ML engineer', 'machine learning engineer', 'artificial intelligence',
    'LLM developer', 'data scientist', 'Python developer', 'TensorFlow', 'PyTorch',
    // Backend
    'Django developer', 'Node.js developer', 'API developer', 'backend engineer',
    // Cloud / DevOps
    'DevOps engineer', 'AWS developer', 'cloud engineer', 'Docker', 'Kubernetes',
    // ERP / Enterprise
    'ERP developer', 'enterprise software', 'fintech developer',
    // VR / Game Dev
    'Unity developer', 'VR developer', 'game developer',
    // Location
    'software engineer Malta', 'developer Malta', 'Nigeria developer', 'remote developer',
    'freelance developer', 'freelance software engineer',
    // General search terms
    'hire developer', 'hire software engineer', 'portfolio', 'software portfolio',
  ],
  authors: [{ name: 'Gerald Okeke' }],
  creator: 'Gerald Okeke',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Gerald Okeke — Senior Software Engineer',
    description: 'Senior Software Engineer based in Malta. Flutter, Django, AI/ML, AWS, Next.js, VR. Available for freelance and full-time roles.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gerald Okeke — Senior Software Engineer',
    description: 'Senior Software Engineer based in Malta. Flutter, Django, AI/ML, AWS, Next.js, VR.',
    creator: '@gerald_devs',
  },
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
