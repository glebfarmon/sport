import {NextIntlClientProvider, useMessages} from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server'
import {Inter} from 'next/font/google'
import {Container} from '@/components/navigation'
import {ThemeProvider} from '@/components/providers'
import {Toaster} from '@/components/ui/toaster'
import {LOCALES} from '@/constants'
import {IParamsLocaleChildren} from '@/models'
import StoreProvider from '@/store/provider'
import {cn} from '@/utils'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const generateStaticParams = () => {
	return LOCALES.map(locale => ({locale}))
}

//TODO PWA

const Layout = ({children, params: {locale}}: IParamsLocaleChildren) => {
	const messages = useMessages()
	unstable_setRequestLocale(locale)

	return (
		<html
			lang={locale}
			suppressHydrationWarning>
			<body className={cn('antialiased', inter.className)}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute={'class'}
						defaultTheme={'system'}
						enableSystem
						disableTransitionOnChange>
						<Toaster />
						<StoreProvider>
							<Container>{children}</Container>
						</StoreProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

export default Layout
