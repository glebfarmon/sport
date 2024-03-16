'use client'

import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useForm} from '@/modules/settings/account/form/use-form'
import {useInitialData} from '@/modules/settings/account/form/use-initial-data'

export const SettingsAccount = () => {
	const t = useTranslations('Settings.Tabs.Account')
	const {formData, form, onSubmit} = useForm()

	useInitialData(form.reset)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={'mt-2 space-y-4 rounded-md border border-input p-6'}>
				<h3 className={'font-semibold leading-none tracking-tight'}>{t('title')}</h3>
				<p className={'text-sm text-muted-foreground'}>{t('subtitle')}</p>
				{formData.map(({property, placeholder, type, autocomplete}, i) => (
					<FormField
						key={i}
						control={form.control}
						name={property}
						render={({field}) => (
							<FormItem>
								<FormLabel>{t(property)}</FormLabel>
								<FormControl>
									<Input
										className={'input-autofill'}
										placeholder={placeholder}
										type={type}
										autoComplete={autocomplete}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button type={'submit'}>{t('save')}</Button>
			</form>
		</Form>
	)
}
