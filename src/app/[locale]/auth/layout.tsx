import {ReactNode} from 'react'
import {AuthProvider} from '@/components'
import GoBack from '@/components/go-back'

const Layout = ({children}: {children: ReactNode}) => {
	return (
		<AuthProvider authPage={true}>
			<div className={'fixed left-4 top-4'}>
				<GoBack />
			</div>
			{children}
		</AuthProvider>
	)
}

export default Layout
