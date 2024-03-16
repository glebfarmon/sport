'use client'

import dynamic from 'next/dynamic'
import type {ReactNode} from 'react'
import {ISettingsProps, TSettingsTabs} from '@/models'
import {SkeletonAccount} from '@/modules/settings/account/skeleton'
import {SkeletonGeneral} from '@/modules/settings/general/skeleton'
import {SkeletonPassword} from '@/modules/settings/password/skeleton'
import {Tabs} from '@/modules/settings/tabs'

const SettingsGeneral = dynamic(
	() => import('@/modules/settings/general').then(mod => mod.SettingsGeneral),
	{loading: () => <SkeletonGeneral />, ssr: false}
)

const SettingsAccount = dynamic(
	() => import('@/modules/settings/account').then(mod => mod.SettingsAccount),
	{loading: () => <SkeletonAccount />, ssr: false}
)

const SettingsPassword = dynamic(
	() => import('@/modules/settings/password').then(mod => mod.SettingsPassword),
	{loading: () => <SkeletonPassword />, ssr: false}
)

const tabComponents: Record<TSettingsTabs, ReactNode> = {
	general: <SettingsGeneral />,
	account: <SettingsAccount />,
	password: <SettingsPassword />
}

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
