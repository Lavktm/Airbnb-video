import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Navbar from './components/navbar/navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
