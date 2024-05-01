import dynamic from 'next/dynamic'
import type {ReactNode} from 'react'
import type {TSettingsTabs} from '@/models'
import {SkeletonAccount} from '@/modules/settings/account/skeleton'
import {SkeletonGeneral} from '@/modules/settings/general/skeleton'
import {SkeletonPassword} from '@/modules/settings/password/skeleton'

const SettingsGeneral = dynamic(() => import('@/modules/settings/general'), {
	loading: () => <SkeletonGeneral />,
	ssr: false
})

const SettingsAccount = dynamic(() => import('@/modules/settings/account'), {
	loading: () => <SkeletonAccount />,
	ssr: false
})

const SettingsPassword = dynamic(() => import('@/modules/settings/password'), {
	loading: () => <SkeletonPassword />,
	ssr: false
})

export const tabComponents: Record<TSettingsTabs, ReactNode> = {
	general: <SettingsGeneral />,
	account: <SettingsAccount />,
	password: <SettingsPassword />
}
