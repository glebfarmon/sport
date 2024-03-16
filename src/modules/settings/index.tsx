import type {ReactNode} from 'react'
import {ISettingsProps, TSettingsTabs} from '@/models'
import {SettingsAccount} from '@/modules/settings/account'
import {SettingsGeneral} from '@/modules/settings/general'
import {SettingsPassword} from '@/modules/settings/password'
import {Tabs} from '@/modules/settings/tabs'

const tabComponents: Record<TSettingsTabs, ReactNode> = {
	general: <SettingsGeneral />,
	account: <SettingsAccount />,
	password: <SettingsPassword />
}

export const Settings = ({tab}: ISettingsProps) => {
	const tabComponent = tabComponents[tab]
	return (
		<div className={'grid h-full place-items-center'}>
			<div className={'flex w-min flex-col'}>
				<ul
					className={
						'inline-flex max-w-fit items-center justify-center gap-x-2 rounded-lg bg-muted p-1 text-sm font-medium text-muted-foreground'
					}>
					<Tabs tab={tab} />
				</ul>
				{tabComponent}
			</div>
		</div>
	)
}
