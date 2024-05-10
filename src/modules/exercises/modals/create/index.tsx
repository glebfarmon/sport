'use client'

import {useTranslations} from 'next-intl'
import {FormFile} from '@/components/form/form-file'
import {FormInput} from '@/components/form/form-input'
import {FormSwitch} from '@/components/form/form-switch'
import {FormTextarea} from '@/components/form/form-textarea'
import {Button} from '@/components/ui/button'
import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Form} from '@/components/ui/form'
import {useForm} from '@/modules/exercises/modals/create/form/use-form'
import {BodyPart} from '@/modules/exercises/modals/shared/body-part'

const CreateModal = () => {
	const t = useTranslations('Exercises.Form')
	const {form, onSubmit} = useForm()

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<DialogHeader>
					<DialogTitle>{t('Create.title')}</DialogTitle>
					<DialogDescription>{t('Create.description')}</DialogDescription>
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
					<FormSwitch
						control={form.control}
						name={'isPublic'}
						label={t('isPublic')}
						className={'block'}
					/>
				</div>
				<DialogFooter>
					<Button type={'submit'}>{t('Create.action')}</Button>
				</DialogFooter>
			</form>
		</Form>
	)
}

export default CreateModal
