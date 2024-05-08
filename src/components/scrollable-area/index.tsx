'use client'

import {type DetailedHTMLProps, type HTMLAttributes, type ReactNode, useRef} from 'react'
import {useObserveScroll} from '@/components/scrollable-area/observe-scroll'
import {cn} from '@/utils'

type IScrollableArea = {
	children: ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ScrollableArea = ({children, className, ...props}: IScrollableArea) => {
	const ref = useRef<HTMLDivElement>(null)
	const {reachedBegin, reachedEnd, overflowing} = useObserveScroll(ref)

	return (
		<div
			ref={ref}
			className={cn('relative h-auto max-h-[100px] overflow-y-scroll', className)}
			{...props}>
			{overflowing && !reachedBegin && (
				<div
					className={
						'pointer-events-none sticky top-0 h-[20px] w-full bg-gradient-to-b from-background'
					}
				/>
			)}
			{children}
			{overflowing && !reachedEnd && (
				<div
					className={
						'pointer-events-none sticky bottom-0 h-[20px] w-full bg-gradient-to-t from-background'
					}
				/>
			)}
		</div>
	)
}
