import * as SwitchPrimitives from '@radix-ui/react-switch'
import type {RefAttributes} from 'react'
import {type Control} from 'react-hook-form'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Switch} from '@/components/ui/switch'

type TFormSwitch = {
	control: Control<any>
	name: string
	label: string
} & Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, 'ref'> &
	RefAttributes<HTMLButtonElement>

export const FormSwitch = ({control, name, label, ...props}: TFormSwitch) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field: {value, onChange, ...rest}}) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Switch
							checked={value}
							onCheckedChange={onChange}
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
