import {ReactNode} from 'react'
import {Tabs} from '@/modules/settings/layout/tabs'

export const SettingsLayout = ({children}: {children: ReactNode}) => {
	return (
		<div className={'grid h-screen place-items-center'}>
			<div className={'flex flex-col'}>
				<ul
					className={
						'inline-flex items-center justify-center gap-x-2 rounded-lg bg-muted p-1 text-sm font-medium text-muted-foreground'
					}>
					<Tabs />
				</ul>
				{children}
			</div>
		</div>
	)
}
