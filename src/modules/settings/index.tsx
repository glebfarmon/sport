import type {ReactNode} from 'react'
import {ISettingsProps, TSettingsTabs} from '@/models'
import {SettingsGeneral} from '@/modules/settings/general'

const tabComponents: Record<TSettingsTabs, ReactNode> = {
	general: <SettingsGeneral />,
	account: <SettingsAccount />,
	password: <SettingsPassword />
}

export const Settings = ({tab}: ISettingsProps) => {
	const tabComponent = tabComponents[tab]
	return (
		<div className={'grid h-screen place-items-center'}>
			<div className={'flex flex-col'}>
				<ul
					className={
						'inline-flex items-center justify-center gap-x-2 rounded-lg bg-muted p-1 text-sm font-medium text-muted-foreground'
					}>
					<Tabs tab={tab} />
				</ul>
				{tabComponent}
			</div>
		</div>
	)
}
