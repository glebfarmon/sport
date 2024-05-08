'use client'

import {useTranslations} from 'next-intl'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import type {IExercise} from '@/models/api'
import {useForm} from '@/modules/exercises/modals/edit/form/use-form'
import {useInitialData} from '@/modules/exercises/modals/edit/form/use-initial-data'

const EditModal = ({exercise}: {exercise: IExercise}) => {
	const t = useTranslations('Exercises')
	const {formData, form, onSubmit} = useForm()
	useInitialData(exercise, form.reset)

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<DialogHeader>
					<DialogTitle>{t('Form.Edit.title')}</DialogTitle>
					<DialogDescription>{t('Form.Edit.description')}</DialogDescription>
				</DialogHeader>
				<div className={'grid gap-4 py-4'}>
					{formData.map(({property, properties, type}, i) => (
						<FormField
							key={i}
							control={form.control}
							name={property}
							render={({field: {value, onChange, ...rest}}) => (
								<FormItem>
									<FormLabel>{t(`Form.${property}`)}</FormLabel>
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
												),
												hidden: null
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
					<Button
						loader={true}
						disabled={form.formState.isSubmitting}
						type={'submit'}>
						{t('Form.Edit.action')}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	)
}

export default EditModal
