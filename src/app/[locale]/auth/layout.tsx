import {ReactNode} from 'react'
import {AuthProvider} from '@/components/providers'

const Layout = ({children}: {children: ReactNode}) => {
	return <AuthProvider authPage={true}>{children}</AuthProvider>
}

export default Layout
