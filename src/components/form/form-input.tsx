import type {RefAttributes} from 'react'
import {type Control} from 'react-hook-form'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input, type InputProps} from '@/components/ui/input'
import {cn} from '@/utils'

type TFormInput = {
	control: Control<any>
	name: string
	label: string
} & InputProps &
	RefAttributes<HTMLInputElement>

export const FormInput = ({control, name, label, className, ...props}: TFormInput) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field}) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							className={cn('input-autofill', className)}
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
