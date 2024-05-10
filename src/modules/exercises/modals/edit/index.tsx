'use client'

import {useTranslations} from 'next-intl'
import {FormFile} from '@/components/form/form-file'
import {FormInput} from '@/components/form/form-input'
import {FormTextarea} from '@/components/form/form-textarea'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Form} from '@/components/ui/form'
import type {IExercise} from '@/models/api'
import {useForm} from '@/modules/exercises/modals/edit/form/use-form'
import {useInitialData} from '@/modules/exercises/modals/edit/form/use-initial-data'
import {BodyPart} from '@/modules/exercises/modals/shared/body-part'

const EditModal = ({exercise}: {exercise: IExercise}) => {
	const t = useTranslations('Exercises.Form')
	const {form, onSubmit} = useForm()
	useInitialData(exercise, form.reset)

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<DialogHeader>
					<DialogTitle>{t('Edit.title')}</DialogTitle>
					<DialogDescription>{t('Edit.description')}</DialogDescription>
				</DialogHeader>
				<div className={'grid gap-4 py-4'}>
					<FormInput
						control={form.control}
						name={'name'}
						label={t('name')}
						autoFocus={true}
						placeholder={'Squats'}
					/>
					<BodyPart control={form.control} />
					<FormTextarea
						control={form.control}
						name={'description'}
						label={t('description')}
						placeholder={
							'Stand with feet shoulder-width apart, keeping your back straight and chest up. Lower your body by bending your knees and pushing your hips back...'
						}
					/>
					<FormFile
						control={form.control}
						name={'image'}
						label={t('image')}
						accept={'image/svg+xml, image/gif'}
					/>
					<FormInput
						control={form.control}
						name={'videoUrl'}
						label={t('videoUrl')}
						placeholder={'https://youtube.com/watch?v=mgSc_NhVQU8'}
					/>
				</div>
				<DialogFooter>
					<Button
						loader={true}
						disabled={form.formState.isSubmitting}
						type={'submit'}>
						{t('Edit.action')}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	)
}

export default EditModal
