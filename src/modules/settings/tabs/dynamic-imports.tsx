import dynamic from 'next/dynamic'
import {AccountSkeleton} from '@/modules/settings/account/skeleton'
import {GeneralSkeleton} from '@/modules/settings/general/skeleton'
import {PasswordSkeleton} from '@/modules/settings/password/skeleton'

export const SettingsGeneral = dynamic(() => import('@/modules/settings/general'), {
	loading: () => <GeneralSkeleton />,
	ssr: false
})

export const SettingsAccount = dynamic(() => import('@/modules/settings/account'), {
	loading: () => <AccountSkeleton />,
	ssr: false
})

export const SettingsPassword = dynamic(() => import('@/modules/settings/password'), {
	loading: () => <PasswordSkeleton />,
	ssr: false
})
