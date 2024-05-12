import {useTranslations} from 'next-intl'
import {type Control, useFieldArray} from 'react-hook-form'
import {MdOutlineAddLink, MdOutlineLinkOff} from 'react-icons/md'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {bodyPart} from '@/models/api'

interface IBodyPart {
	control: Control<any>
}

const bodyPartsArray: bodyPart[] = Object.values(bodyPart)
const maxLength = 4

export const BodyPart = ({control}: IBodyPart) => {
	const t = useTranslations('Exercises')
	const {fields, append, remove} = useFieldArray({
		control,
		name: 'bodyParts'
	})

	return fields.map((field, index) => (
		<FormField
			key={field.id}
			control={control}
			name={`bodyParts.${index}.value`}
			render={({field}) => (
				<FormItem>
					<FormLabel className={'flex items-center gap-x-2'}>
						{t('Form.bodyPart')}
						{fields.length > 1 && (
							<MdOutlineLinkOff
								className={'cursor-pointer'}
								size={'16px'}
								onClick={() => remove(index)}
							/>
						)}
						{field.value && fields.length < maxLength && fields.length === index + 1 && (
							<MdOutlineAddLink
								className={'cursor-pointer'}
								size={'16px'}
								onClick={() => append({value: undefined})}
							/>
						)}
					</FormLabel>
					<Select
						onValueChange={field.onChange}
						defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={t('BodyParts.choose')} />
							</SelectTrigger>
						</FormControl>
						<SelectContent className={'flex'}>
							{bodyPartsArray.map((bodyPart, i) => (
								<SelectItem
									key={i}
									value={bodyPart}>
									{t(`BodyParts.${bodyPart}`)}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	))
}
