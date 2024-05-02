'use client'

import {useTranslations} from 'next-intl'
import {memo} from 'react'
import {useDebouncedCallback} from 'use-debounce'
import {Search as SearchInput} from '@/components/ui/search'
import {exerciseActions} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks'

const Search = memo(() => {
	const t = useTranslations('Exercises')

	const search = useAppSelector(state => state.exercise.search)
	const dispatch = useAppDispatch()

	const debounced = useDebouncedCallback((value: string) => {
		dispatch(exerciseActions.setPage(1))
		dispatch(exerciseActions.setSearch(value))
	}, 500)

	return (
		<SearchInput
			placeholder={t('search')}
			defaultValue={search}
			onChange={e => debounced(e.target.value)}
		/>
	)
})

export default Search