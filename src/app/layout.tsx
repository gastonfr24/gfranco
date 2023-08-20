import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import dynamic from 'next/dynamic'
const SrollSmooth = dynamic(() => import('@/components/tools/SrollSmooth'), { ssr: false })

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gastón Franco | Desarrollo Web y Marketing',
  description: 'Potenciando tu éxito digital con soluciones excepcionales en desarrollo web y más. Convierte tu visión en una realidad en línea impactante.',
  keywords: "web design, blog, ecommerce, portfolio, marketing",
  authors: [{ name: 'Gaston' }, { name: 'Gaston', url: 'https://gfranco.com' }],
  colorScheme: 'dark',
  //creator: 'Jiachi Liu',
  //publisher: 'Sebastian Markbåge',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Navbar/>
        {children}
      <SrollSmooth/>
      <Footer/>
      </body>

    </html>
  )
}
