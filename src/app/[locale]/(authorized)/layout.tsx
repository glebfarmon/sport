import {Metadata} from 'next'
import {ReactNode} from 'react'
import {AuthProvider} from '@/components/providers'
import {NO_INDEX_PAGE} from '@/constants'

export const metadata: Metadata = {
	...NO_INDEX_PAGE
}

const Layout = ({children}: {children: ReactNode}) => {
	return <AuthProvider>{children}</AuthProvider>
}

export default Layout
