import {ReactNode} from 'react'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {config} from '@/config'
import {keywords} from '@/data'
import './globals.css'

const inter = Inter({subsets: ['latin']})
const {title} = config
const description = 'Record your exercise statistics'

export const metadata: Metadata = {
  title,
  description,
  keywords,
  authors: {
    name: 'Hlib Ilnytsky',
    url: 'https://github.com/glebfarmon'
  },
  metadataBase: new URL(config.url),
  generator: 'Next.js',
  creator: title,
  publisher: title,
  robots: 'index, follow',
  manifest: '/favicons/site.webmanifest',
  openGraph: {
    title,
    description,
    type: 'website'
  },
  twitter: {
    title,
    description
  },
  applicationName: title,
  category: description,
  appleWebApp: {
    title: title,
    statusBarStyle: 'default'
  },
  icons: {
    icon: [
      {
        url: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: {
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png'
    },
    shortcut: {
      url: '/favicons/favicon.ico'
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
