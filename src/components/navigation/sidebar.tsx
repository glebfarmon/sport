'use client'

import {useTooltips} from '@/components/navigation/use-tooltips'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'

export const Sidebar = () => {
	const tooltips = useTooltips()

	return (
		<aside className={'border-t bg-background p-2 lg:border-0 lg:border-l'}>
			<div className={'flex shrink-0 flex-row justify-evenly lg:flex-col lg:gap-y-2'}>
				<TooltipProvider>
					{tooltips.map((tooltip, i) => (
						<Tooltip key={i}>
							<TooltipTrigger asChild>{tooltip.node}</TooltipTrigger>
							<TooltipContent>
								<p>{tooltip.title}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</div>
		</aside>
	)
}
