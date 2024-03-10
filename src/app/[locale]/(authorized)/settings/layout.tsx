import {ReactNode} from 'react'
import {SettingsLayout} from '@/modules/settings/layout'

const Layout = ({children}: {children: ReactNode}) => {
	return <SettingsLayout>{children}</SettingsLayout>
}

export default Layout
