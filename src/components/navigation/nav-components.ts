import type {ForwardRefExoticComponent, RefAttributes} from 'react'
import {Exercises, History, Progress, Routines, Settings} from '@/components/navigation/buttons'
import {ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

type TNavComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>
export const navComponents: {
	NavComponent: TNavComponent
	variant: keyof typeof PAGES
}[] = [
	{NavComponent: Routines, variant: 'ROUTINES'},
	{NavComponent: Exercises, variant: 'EXERCISES'},
	{NavComponent: History, variant: 'HISTORY'},
	{NavComponent: Progress, variant: 'PROGRESS'},
	{NavComponent: Settings, variant: 'SETTINGS'}
]
