'use client'

import {useTranslations} from 'next-intl'
import {usePathname} from 'next/navigation'
import {navComponents} from '@/components/navigation/nav-components'
import {ButtonProps} from '@/components/ui/button'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {PAGES} from '@/constants'

export const Sidebar = () => {
	const t = useTranslations('Navigation.Aria')
	const pathname = usePathname()

	const getVariant = (pagePath: keyof typeof PAGES): ButtonProps['variant'] =>
		pathname.includes(PAGES[pagePath]) ? 'secondary' : 'outline'

	const isDisabled = pathname === PAGES.LOGIN || pathname === PAGES.REGISTER

	return (
		<aside className={'border-t bg-background p-2 lg:border-0 lg:border-l'}>
			<div className={'flex shrink-0 flex-row justify-evenly lg:flex-col lg:gap-y-2'}>
				<TooltipProvider>
					{navComponents.map(({NavComponent, variant}, i) => {
						const text = t(variant.toLowerCase())
						return (
							<Tooltip key={i}>
								<TooltipTrigger asChild>
									<NavComponent
										aria-label={text}
										disabled={isDisabled}
										variant={getVariant(variant)}
									/>
								</TooltipTrigger>
								<TooltipContent side={'left'}>
									<p>{text}</p>
								</TooltipContent>
							</Tooltip>
						)
					})}
				</TooltipProvider>
			</div>
		</aside>
	)
}
