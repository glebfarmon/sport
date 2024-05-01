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

const SettingsAccount = () => {
	const t = useTranslations('Settings.Tabs.Account')
	const {formData, form, onSubmit} = useForm()
	const {push} = useRouter()
	const [logout] = useLogoutMutation()
	const dispatch = useAppDispatch()

	useInitialData(form.reset)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={'space-y-4 rounded-md border border-input p-6'}>
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
				<div className={'flex flex-col gap-y-2 sm:flex-row sm:justify-between'}>
					<Button type={'submit'}>{t('save')}</Button>
					<Button
						variant={'outline'}
						type={'button'}
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
