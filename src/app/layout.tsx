import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../../components/Navigation'
import { Providers } from './store/provider'
import { Analytics } from '@vercel/analytics/react';
import Footer from '../../components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Detectify-AI',
  description: 'Interactive 3D React Components',
  appleWebApp: {
    capable: true,
    title: "Detectify-AI",
    statusBarStyle: "black-translucent",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en">
      <body className={`${inter.className} pt-14 bg-white h-full overflow-x-hidden overscroll-none dark:darkmode-background`} suppressHydrationWarning={true}>
      <Navigation/>
      <Providers>
        <div className='min-h-screen'>
        {children}
        </div>
          <Analytics/>
       </Providers>
      <Footer/>
      </body>
    </html>
  )
}
