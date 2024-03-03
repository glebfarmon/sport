import {NextIntlClientProvider, useMessages} from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server'
import {Inter} from 'next/font/google'
import {LanguageSwitcher, ThemeProvider, ThemeSwitcher} from '@/components'
import {Toaster} from '@/components/ui/toaster'
import {LOCALES} from '@/constants'
import {IParamsLocaleChildren} from '@/models'
import Provider from '@/store/provider'
import {cn} from '@/utils'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const generateStaticParams = () => {
	return LOCALES.map(locale => ({locale}))
}

const Layout = ({children, params: {locale}}: IParamsLocaleChildren) => {
	const messages = useMessages()
	unstable_setRequestLocale(locale)

	return (
		<html
			lang={locale}
			suppressHydrationWarning>
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
						<Toaster />
						<Provider>{children}</Provider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

export default Layout
