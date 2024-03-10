'use client'

import {useTranslations} from 'next-intl'
import Link from 'next/link'
import {PAGES} from '@/constants'
import {usePathname} from '@/hooks'
import {cn} from '@/utils'

export const Tabs = () => {
	const t = useTranslations('Settings.Tabs')
	const pathname = usePathname()
	const isActive = (pagePath: keyof typeof PAGES) => pathname.includes(PAGES[pagePath])

	const tabs: {title: string; page: keyof typeof PAGES}[] = [
		{title: t('account'), page: 'SETTINGS_ACCOUNT'},
		{title: t('password'), page: 'SETTINGS_PASSWORD'},
		{title: t('general'), page: 'SETTINGS_GENERAL'}
	]

	return tabs.map((tab, i) => (
		<Link
			href={PAGES[tab.page]}
			className={cn(
				'cursor-pointer rounded-md px-10 py-1 transition-all hover:text-white',
				isActive(tab.page) && 'bg-background text-white'
			)}
			key={i}>
			{tab.title}
		</Link>
	))
}
