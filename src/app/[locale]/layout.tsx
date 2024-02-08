import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import {config} from '@/config'
import {keywords, description, authors, locales} from '@/data'
import {ThemeProvider, ThemeSwitcher, LanguageSwitcher} from '@/components'
import {NextIntlClientProvider, useMessages} from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server'
import {IParamsLocaleChildren} from '@/types'
import {cn} from '@/utils'
import './globals.css'

const {title, url} = config
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title,
  description,
  keywords,
  authors,
  metadataBase: new URL(url),
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
    statusBarStyle: 'black-translucent',
    capable: true
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

export const viewport: Viewport = {
  themeColor: 'currentColor',
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false
}

export const generateStaticParams = () => {
  return locales.map(locale => ({locale}))
}

const Layout = ({children, params: {locale}}: IParamsLocaleChildren) => {
  const messages = useMessages()
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased', inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute={'class'}
            defaultTheme={'system'}
            enableSystem
            disableTransitionOnChange>
            <div className={'fixed right-4 top-4'}>
              <div className={'flex shrink-0 flex-row gap-2'}>
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
