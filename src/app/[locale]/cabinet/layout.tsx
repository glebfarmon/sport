import {ReactNode} from 'react'
import {AuthProvider} from '@/components'

const Layout = ({children}: {children: ReactNode}) => {
	return <AuthProvider>{children}</AuthProvider>
}

export default Layout
