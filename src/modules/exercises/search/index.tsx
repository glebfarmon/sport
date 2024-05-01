'use client'

import {memo} from 'react'
import {useDebouncedCallback} from 'use-debounce'
import {Search as SearchInput} from '@/components/ui/search'
import type {IPaginationParams, IPaginationSetParams} from '@/models/api'

interface ISearch extends IPaginationSetParams, Pick<IPaginationParams, 'search'> {}

export const Search = memo(({search, setParams}: ISearch) => {
	const debounced = useDebouncedCallback((value: string) => {
		setParams(prev => ({...prev, page: 1, search: value}))
	}, 500)

	return (
		<SearchInput
			placeholder={'Search...'}
			defaultValue={search}
			onChange={e => debounced(e.target.value)}
		/>
	)
})
