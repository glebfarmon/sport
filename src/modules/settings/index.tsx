'use client'

import {ISettingsProps} from '@/models'
import {Tabs} from '@/modules/settings/tabs'
import {tabComponents} from '@/modules/settings/tabs/components'

export const Settings = ({tab}: ISettingsProps) => {
	const tabComponent = tabComponents[tab]
	return (
		<div className={'grid h-full place-items-center'}>
			<div className={'flex w-min flex-col gap-y-2'}>
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
