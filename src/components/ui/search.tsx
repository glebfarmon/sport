import {SearchIcon} from 'lucide-react'
import * as React from 'react'
import {cn} from '@/utils'

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
	({className, type = 'search', ...props}, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow',
					className
				)}>
				<SearchIcon size={'16px'} />
				<input
					className={
						'w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-transparent'
					}
					type={type}
					ref={ref}
					{...props}
				/>
			</div>
		)
	}
)
Search.displayName = 'Input'

export {Search}
