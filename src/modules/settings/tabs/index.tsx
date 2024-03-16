import {useTranslations} from 'next-intl'
import Link from 'next/link'
import {ISettingsProps, TSettingsTabs} from '@/models'
import {cn} from '@/utils'

export const Tabs = ({tab}: ISettingsProps) => {
	const t = useTranslations('Settings.Tabs')

	const tabs: {title: string; query: TSettingsTabs}[] = [
		{title: t('general'), query: 'general'},
		{title: t('account'), query: 'account'},
		{title: t('password'), query: 'password'}
	]

	return tabs.map(({title, query}, i) => (
		<Link
			className={cn(
				'cursor-pointer rounded-md px-10 py-1 transition-all hover:text-white',
				tab === query && 'bg-background text-white'
			)}
			href={`?${new URLSearchParams({tab: query})}`}
			key={i}>
			{title}
		</Link>
	))
}
