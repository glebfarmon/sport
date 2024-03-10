'use client'

import {useTranslations} from 'next-intl'
import {ReactNode} from 'react'
import {Exercises, History, Progress, Routines, Settings} from '@/components/navigation'
import {ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'
import {usePathname} from '@/hooks'

export const useTooltips = (): {title: string; node: ReactNode}[] => {
	const t = useTranslations()
	const pathname = usePathname()

	const setVariant = (pagePath: keyof typeof PAGES): ButtonProps['variant'] =>
		pathname.includes(PAGES[pagePath]) ? 'secondary' : 'outline'

	const isDisabled = pathname === (PAGES.LOGIN || PAGES.REGISTER)

	return [
		{
			title: t('Routines.title'),
			node: (
				<Routines
					disabled={isDisabled}
					variant={setVariant('ROUTINES')}
				/>
			)
		},
		{
			title: t('History.title'),
			node: (
				<History
					disabled={isDisabled}
					variant={setVariant('HISTORY')}
				/>
			)
		},
		{
			title: t('Progress.title'),
			node: (
				<Progress
					disabled={isDisabled}
					variant={setVariant('PROGRESS')}
				/>
			)
		},
		{
			title: t('Exercises.title'),
			node: (
				<Exercises
					disabled={isDisabled}
					variant={setVariant('EXERCISES')}
				/>
			)
		},
		{
			title: t('Settings.title'),
			node: (
				<Settings
					disabled={isDisabled}
					variant={setVariant('SETTINGS')}
				/>
			)
		}
	]
}
