import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
