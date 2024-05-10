import type {RefAttributes} from 'react'
import {type Control} from 'react-hook-form'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input, type InputProps} from '@/components/ui/input'

type TFormFile = {
	control: Control<any>
	name: string
	label: string
} & InputProps &
	RefAttributes<HTMLInputElement>

export const FormFile = ({control, name, label, className, ...props}: TFormFile) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field: {value, onChange, ...rest}}) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							type={'file'}
							onChange={e => onChange(e.target?.files?.[0] ?? undefined)}
							{...props}
							{...rest}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
