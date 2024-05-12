import type {ReactNode, RefAttributes} from 'react'
import {type Control} from 'react-hook-form'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {type InputProps} from '@/components/ui/input'
import {Select, SelectContent, SelectTrigger, SelectValue} from '@/components/ui/select'

type IFormSelect = {
	control: Control<any>
	name: string
	label: string
	children: ReactNode
} & InputProps &
	RefAttributes<HTMLInputElement>

export const FormSelect = ({control, name, label, className, children, ...props}: IFormSelect) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field}) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Select
						onValueChange={field.onChange}
						defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={label} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>{children}</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
