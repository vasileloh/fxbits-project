import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DropDown } from './ui/dropdown'
import Search from './ui/search'
import Header from './ui/header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black` }>{children}
       
         </body>
    </html>
  )
}
