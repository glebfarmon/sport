'use client'

import {ISettingsProps} from '@/models'
import {Tabs} from '@/modules/settings/tabs'
import {
	SettingsAccount,
	SettingsGeneral,
	SettingsPassword
} from '@/modules/settings/tabs/dynamic-impors'

export const Settings = ({tab}: ISettingsProps) => {
	return (
		<div className={'grid h-full place-items-center'}>
			<div className={'flex w-min flex-col gap-y-2'}>
				<div
					className={
						'inline-flex max-w-fit items-center justify-center gap-x-2 rounded-lg bg-muted p-1 text-sm font-medium text-muted-foreground'
					}>
					<Tabs tab={tab} />
				</div>
				{
					{
						general: tab === 'general' && <SettingsGeneral />,
						account: tab === 'account' && <SettingsAccount />,
						password: tab === 'password' && <SettingsPassword />
					}[tab]
				}
			</div>
		</div>
	)
}
