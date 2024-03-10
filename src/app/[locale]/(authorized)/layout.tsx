import {unstable_setRequestLocale} from 'next-intl/server'
import {AuthProvider} from '@/components'
import {IParamsLocaleChildren} from '@/models'

const Layout = ({children, params: {locale}}: IParamsLocaleChildren) => {
	unstable_setRequestLocale(locale)

	return <AuthProvider>{children}</AuthProvider>
}

export default Layout
