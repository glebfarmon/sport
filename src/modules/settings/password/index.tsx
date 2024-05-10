'use client'

import {useTranslations} from 'next-intl'
import {FormInput} from '@/components/form/form-input'
import {Button} from '@/components/ui/button'
import {Form} from '@/components/ui/form'
import {useForm} from '@/modules/settings/password/form/use-form'

const SettingsPassword = () => {
	const t = useTranslations('Settings.Tabs.Password')
	const {form, onSubmit} = useForm()

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={'space-y-4 rounded-md border border-input p-6'}>
				<h3 className={'font-semibold leading-none tracking-tight'}>{t('title')}</h3>
				<p className={'text-sm text-muted-foreground'}>{t('subtitle')}</p>
				<FormInput
					control={form.control}
					name={'password'}
					label={t('password')}
					placeholder={'123456'}
					autoComplete={'current-password'}
				/>
				<FormInput
					control={form.control}
					name={'password_new'}
					label={t('password_new')}
					placeholder={'654321'}
					autoComplete={'new-password'}
				/>
				<Button
					className={'w-full sm:w-auto'}
					type={'submit'}
					loader={true}
					disabled={form.formState.isSubmitting}>
					{t('save')}
				</Button>
			</form>
		</Form>
	)
}

export default SettingsPassword
