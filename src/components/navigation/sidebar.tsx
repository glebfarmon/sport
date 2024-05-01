'use client'

import {usePathname} from 'next/navigation'
import {Exercises, History, Progress, Routines, Settings} from '@/components/navigation/buttons'
import {ButtonProps} from '@/components/ui/button'
import {PAGES} from '@/constants'

export const Sidebar = () => {
	const pathname = usePathname()

	const getVariant = (pagePath: keyof typeof PAGES): ButtonProps['variant'] =>
		pathname.includes(PAGES[pagePath]) ? 'secondary' : 'outline'

	const isDisabled = pathname === PAGES.LOGIN || pathname === PAGES.REGISTER

	return (
		<aside className={'border-t bg-background p-2 lg:border-0 lg:border-l'}>
			<div className={'flex shrink-0 flex-row justify-evenly lg:flex-col lg:gap-y-2'}>
				<Routines
					disabled={isDisabled}
					variant={getVariant('ROUTINES')}
				/>
				<Exercises
					disabled={isDisabled}
					variant={getVariant('EXERCISES')}
				/>
				<History
					disabled={isDisabled}
					variant={getVariant('HISTORY')}
				/>
				<Progress
					disabled={isDisabled}
					variant={getVariant('PROGRESS')}
				/>
				<Settings
					disabled={isDisabled}
					variant={getVariant('SETTINGS')}
				/>
			</div>
		</aside>
	)
}
