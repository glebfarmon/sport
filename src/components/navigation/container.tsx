import type {ReactNode} from 'react'
import {Sidebar} from '@/components/navigation/sidebar'

export const NavigationContainer = ({children}: {children: ReactNode}) => {
	return (
		<div className={'grid h-dvh grid-rows-[1fr,auto] lg:grid-cols-[1fr,auto] lg:grid-rows-[auto]'}>
			<div className={'remove-scrollbar overflow-auto'}>{children}</div>
			<Sidebar />
		</div>
	)
}
