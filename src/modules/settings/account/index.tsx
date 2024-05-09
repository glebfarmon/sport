'use client'

import {useTranslations} from 'next-intl'
import {useRouter} from 'next/navigation'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {PAGES} from '@/constants/pages'
import {useLogoutMutation} from '@/store/api/auth.api'
import {mainApi} from '@/store/api/main.api'
import {useAppDispatch} from '@/hooks'
import {useForm} from '@/modules/settings/account/form/use-form'
import {useInitialData} from '@/modules/settings/account/form/use-initial-data'
import {AccountSkeleton} from '@/modules/settings/account/skeleton'

const SettingsAccount = () => {
	const t = useTranslations('Settings.Tabs.Account')
	const {formData, form, onSubmit} = useForm()
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
