'use client'

import {useTranslations} from 'next-intl'
import {useRouter} from 'next/navigation'
import {FormInput} from '@/components/form/form-input'
import {Button} from '@/components/ui/button'
import {Form} from '@/components/ui/form'
import {PAGES} from '@/constants/pages'
import {useLogoutMutation} from '@/store/api/auth.api'
import {mainApi} from '@/store/api/main.api'
import {useAppDispatch} from '@/hooks'
import {useForm} from '@/modules/settings/account/form/use-form'
import {useInitialData} from '@/modules/settings/account/form/use-initial-data'
import {AccountSkeleton} from '@/modules/settings/account/skeleton'

const SettingsAccount = () => {
	const t = useTranslations('Settings.Tabs.Account')
	const {form, onSubmit} = useForm()
	const {push} = useRouter()
	const [logout, {isLoading}] = useLogoutMutation()
	const dispatch = useAppDispatch()

	const isInitialLoaded = useInitialData(form.reset)
	if (!isInitialLoaded) return <AccountSkeleton />

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={'space-y-4 rounded-md border border-input p-6'}>
				<h3 className={'font-semibold leading-none tracking-tight'}>{t('title')}</h3>
				<p className={'text-sm text-muted-foreground'}>{t('subtitle')}</p>
				<FormInput
					control={form.control}
					name={'full_name'}
					label={t('full_name')}
					placeholder={'Troy Walker'}
					autoComplete={'name'}
				/>
				<FormInput
					control={form.control}
					name={'username'}
					label={t('username')}
					placeholder={'fernstalk'}
					autoComplete={'username'}
				/>
				<FormInput
					control={form.control}
					name={'password'}
					label={t('password')}
					placeholder={'123456'}
					autoComplete={'current-password'}
				/>
				<div className={'flex flex-col gap-y-2 sm:flex-row sm:justify-between'}>
					<Button
						type={'submit'}
						loader={true}
						disabled={isLoading || form.formState.isSubmitting}>
						{t('save')}
					</Button>
					<Button
						variant={'outline'}
						type={'button'}
						loader={true}
						disabled={isLoading || form.formState.isSubmitting}
						onClick={() => {
							logout().then(() => {
								push(PAGES.LOGIN)
								dispatch(mainApi.util.resetApiState())
							})
						}}>
						{t('logout')}
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default SettingsAccount
