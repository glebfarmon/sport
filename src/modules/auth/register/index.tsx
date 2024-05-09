'use client'

import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {PAGES} from '@/constants/pages'
import {Link} from '@/hooks'
import {useForm} from '@/modules/auth/register/form/use-form'

export const Register = () => {
	const t = useTranslations('Auth')
	const {formData, form, onSubmit} = useForm()

	return (
		<div className={'grid h-full place-items-center'}>
			<div className={'flex flex-col'}>
				<p className={'mb-2 text-center text-2xl font-semibold'}>{t('Register.greeting')}</p>
				<p className={'text-center text-sm text-muted-foreground'}>{t('Register.subgreeting')}</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className={'mt-6 max-w-[400px] space-y-4 rounded-md border border-input p-4'}>
						{formData.map(({property, properties}, i) => (
							<FormField
								key={i}
								control={form.control}
								name={property}
								render={({field}) => (
									<FormItem>
										<FormLabel>{t(`Form.${property}`)}</FormLabel>
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
