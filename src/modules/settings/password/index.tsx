'use client'

import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useForm} from '@/modules/settings/password/form/use-form'

const SettingsPassword = () => {
	const t = useTranslations('Settings.Tabs.Password')
	const {formData, form, onSubmit} = useForm()

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={'space-y-4 rounded-md border border-input p-6'}>
				<h3 className={'font-semibold leading-none tracking-tight'}>{t('title')}</h3>
				<p className={'text-sm text-muted-foreground'}>{t('subtitle')}</p>
				{formData.map(({property, properties}, i) => (
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
										{...properties}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button
					className={'w-full sm:w-auto'}
					type={'submit'}
					disabled={form.formState.isSubmitting}>
					{t('save')}
				</Button>
			</form>
		</Form>
	)
}

export default SettingsPassword
