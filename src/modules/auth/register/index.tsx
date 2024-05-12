'use client'

import {useTranslations} from 'next-intl'
import {FormInput} from '@/components/form/form-input'
import {Button} from '@/components/ui/button'
import {Form} from '@/components/ui/form'
import {PAGES} from '@/constants/pages'
import {Link} from '@/hooks'
import {useForm} from '@/modules/auth/register/form/use-form'

export const Register = () => {
	const t = useTranslations('Auth')
	const {form, onSubmit} = useForm()

	return (
		<div className={'grid h-full place-items-center'}>
			<div className={'flex flex-col'}>
				<p className={'mb-2 text-center text-2xl font-semibold'}>{t('Register.greeting')}</p>
				<p className={'text-center text-sm text-muted-foreground'}>{t('Register.subgreeting')}</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className={'mt-6 max-w-[400px] space-y-4 rounded-md border border-input p-4'}>
						<FormInput
							control={form.control}
							name={'full_name'}
							label={t('Form.full_name')}
							placeholder={'Troy Walker'}
							autoComplete={'name'}
						/>
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
							type={'password'}
							placeholder={'123456'}
							autoComplete={'new-password'}
						/>
						<FormInput
							control={form.control}
							name={'repeat_password'}
							label={t('Form.repeat_password')}
							type={'password'}
							placeholder={'123456'}
							autoComplete={'new-password'}
						/>
						<div className={'flex flex-col gap-y-2 sm:flex-row sm:justify-between'}>
							<Button
								type={'submit'}
								loader={true}
								disabled={form.formState.isSubmitting}>
								{t('Form.register')}
							</Button>
							<Button
								variant={'outline'}
								type={'button'}
								asChild>
								<Link href={PAGES.LOGIN}>{t('Form.login')}</Link>
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}
