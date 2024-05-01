import {useTranslations} from 'next-intl'
import {ISettingsProps, TSettingsTabs} from '@/models'
import {Link} from '@/hooks'
import {cn} from '@/utils'

export const Tabs = ({tab}: ISettingsProps) => {
	const t = useTranslations('Settings.Tabs')

	const tabs: {title: string; query: TSettingsTabs}[] = [
		{title: t('General.title'), query: 'general'},
		{title: t('Account.title'), query: 'account'},
		{title: t('Password.title'), query: 'password'}
	]

	return tabs.map(({title, query}, i) => (
		<Link
			className={cn(
				'cursor-pointer rounded-md sm:px-10 px-6 py-1 transition-all hover:text-foreground',
				tab === query && 'bg-background text-foreground'
			)}
			href={`?${new URLSearchParams({tab: query})}`}
			key={i}>
			{title}
		</Link>
	))
}
