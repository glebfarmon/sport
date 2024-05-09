'use client'

import {useTranslations} from 'next-intl'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {useForm} from '@/modules/settings/general/form/use-form'

const SettingsGeneral = () => {
	const t = useTranslations('Settings.Tabs.General')
	const {form, formData} = useForm()

	return (
		<Form {...form}>
			<form className={'space-y-4 rounded-md border border-input p-6'}>
				<h3 className={'font-semibold leading-none tracking-tight'}>{t('title')}</h3>
				<p className={'text-sm text-muted-foreground'}>{t('subtitle')}</p>
				{formData.map(({property, func, content}, i) => (
					<FormField
						key={i}
						control={form.control}
						name={property}
						render={({field}) => (
							<FormItem>
								<FormLabel>{t(`${property}.label`)}</FormLabel>
								<Select
									defaultValue={field.value}
									onValueChange={e => {
										if (e) func(e)
										field.onChange(e)
									}}
									key={i}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder={t(`${property}.label`)} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{content.map((value, i) => (
											<SelectItem
												key={i}
												value={value}>
												{t(`${property}.${value}`)}
											</SelectItem>
										))}
									</SelectContent>
									<FormMessage />
								</Select>
							</FormItem>
						)}></FormField>
				))}
			</form>
		</Form>
	)
}

export default SettingsGeneral
