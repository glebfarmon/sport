'use client'

import {useTranslations} from 'next-intl'
import {FormInput} from '@/components/form/form-input'
import {Button} from '@/components/ui/button'
import {Form} from '@/components/ui/form'
import {PAGES} from '@/constants/pages'
import {Link} from '@/hooks'
import {useForm} from '@/modules/auth/login/form/use-form'

export const Login = () => {
	const t = useTranslations('Auth')
	const {form, onSubmit} = useForm()

	return (
		<div className={'grid h-full place-items-center'}>
			<div className={'flex flex-col'}>
				<p className={'mb-2 text-center text-2xl font-semibold'}>{t('Login.greeting')}</p>
				<p className={'text-center text-sm text-muted-foreground'}>{t('Login.subgreeting')}</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className={'mt-6 space-y-4 rounded-md border border-input p-4'}>
						<FormInput
							control={form.control}
							name={'username'}
							label={t('Form.username')}
							placeholder={'fernstalk'}
							autoComplete={'username'}
						/>
						<FormInput
							control={form.control}
							name={'password'}
							label={t('Form.password')}
							placeholder={'123456'}
							type={'password'}
							autoComplete={'current-password'}
						/>
						<div className={'flex flex-col gap-y-2 sm:flex-row sm:justify-between'}>
							<Button
								type={'submit'}
								loader={true}
								disabled={form.formState.isSubmitting}>
								{t('Form.login')}
							</Button>
							<Button
								variant={'outline'}
								type={'button'}
								asChild>
								<Link href={PAGES.REGISTER}>{t('Form.register')}</Link>
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}
