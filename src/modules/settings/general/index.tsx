'use client'

import {useTranslations} from 'next-intl'
import {useTheme} from 'next-themes'
import {FormSelect} from '@/components/form/form-select'
import {Form} from '@/components/ui/form'
import {SelectItem} from '@/components/ui/select'
import {LOCALES} from '@/constants'
import {useForm} from '@/modules/settings/general/form/use-form'
import {useSubscription} from '@/modules/settings/general/form/use-subscription'

const SettingsGeneral = () => {
	const t = useTranslations('Settings.Tabs.General')
	const {form} = useForm()
	const {themes} = useTheme()

	useSubscription(form.watch)

	return (
		<Form {...form}>
			<form className={'space-y-4 rounded-md border border-input p-6'}>
				<h3 className={'font-semibold leading-none tracking-tight'}>{t('title')}</h3>
				<p className={'text-sm text-muted-foreground'}>{t('subtitle')}</p>
				<FormSelect
					control={form.control}
					name={'theme'}
					label={t('theme.label')}>
					{themes.map((theme, i) => (
						<SelectItem
							value={theme}
							key={i}>
							{t(`theme.${theme}`)}
						</SelectItem>
					))}
				</FormSelect>
				<FormSelect
					control={form.control}
					name={'language'}
					label={t('language.label')}>
					{LOCALES.map((locale, i) => (
						<SelectItem
							value={locale}
							key={i}>
							{t(`language.${locale}`)}
						</SelectItem>
					))}
				</FormSelect>
			</form>
		</Form>
	)
}

export default SettingsGeneral
