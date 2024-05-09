'use client'

import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Switch} from '@/components/ui/switch'
import {Textarea} from '@/components/ui/textarea'
import {useForm} from '@/modules/exercises/modals/create/form/use-form'

const CreateModal = () => {
	const t = useTranslations('Exercises.Form')
	const {formData, form, onSubmit} = useForm()

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<DialogHeader>
					<DialogTitle>{t('Create.title')}</DialogTitle>
					<DialogDescription>{t('Create.description')}</DialogDescription>
				</DialogHeader>
				<div className={'grid gap-4 py-4'}>
					{formData.map(({property, properties, type}, i) => (
						<FormField
							key={i}
							control={form.control}
							name={property}
							render={({field: {value, onChange, ...rest}}) => (
								<FormItem>
									<FormLabel>{t(property)}</FormLabel>
									<FormControl>
										{
											{
												input: type === 'input' && (
													<Input
														className={'input-autofill'}
														value={String(value)}
														onChange={onChange}
														autoFocus={i === 0}
														{...properties}
														{...rest}
													/>
												),
												switch: type === 'switch' && (
													<Switch
														className={'block'}
														checked={Boolean(value)}
														onCheckedChange={onChange}
														{...rest}
													/>
												),
												file: type === 'file' && (
													<Input
														onChange={e => onChange(e.target?.files?.[0] ?? undefined)}
														{...properties}
														{...rest}
													/>
												),
												textarea: type === 'textarea' && (
													<Textarea
														className={'resize-none'}
														value={String(value)}
														onChange={onChange}
														{...properties}
														{...rest}
													/>
												)
											}[type]
										}
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
				</div>
				<DialogFooter>
					<Button type={'submit'}>{t('Create.action')}</Button>
				</DialogFooter>
			</form>
		</Form>
	)
}

export default CreateModal
