import type {RefAttributes} from 'react'
import {type Control} from 'react-hook-form'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Textarea, type TextareaProps} from '@/components/ui/textarea'
import {cn} from '@/utils'

type TFormInput = {
	control: Control<any>
	name: string
	label: string
} & TextareaProps &
	RefAttributes<HTMLTextAreaElement>

export const FormTextarea = ({control, name, label, className, ...props}: TFormInput) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field}) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Textarea
							className={cn('resize-none', className)}
							{...props}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
