import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dark } from '@clerk/themes'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streami.io',
  description: 'Next Gen Streaming Service For Gamers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider appearance={{baseTheme:dark}}>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider attribute="class" forcedTheme='dark' storageKey='streami-theme'>
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    
  )
}
