import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// const inter = Inter({ subsets: ['latin'] })y

export const metadata: Metadata = {
  title: 'Nayan | Portfolio',
  description: 'Nayan Pahuja &apos;s  Software Developer Portfolio. This is where i showcase my projects and experience',
  keywords: 'HTML,CSS,JAVASCRIPT,REACT,KOTLIN,APP DEVELOPER, WEB DEVELOPER, LEETCODE , DSA, STUDENT, NAYAN PAHUJA'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
