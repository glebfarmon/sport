'use client'

import {useTranslations} from 'next-intl'
import {useDebouncedCallback} from 'use-debounce'
import {Search as SearchInput} from '@/components/ui/search'
import {setPage, setSearch} from '@/store/slices/exercise.slice'
import {useAppDispatch, useAppSelector} from '@/hooks'

const Search = () => {
	const t = useTranslations('Exercises')

	const search = useAppSelector(state => state.exercise.search)
	const dispatch = useAppDispatch()

	const debounced = useDebouncedCallback((value: string) => {
		dispatch(setPage(1))
		dispatch(setSearch(value))
	}, 500)

	return (
		<SearchInput
			name={'search'}
			placeholder={t('search')}
			defaultValue={search}
			onChange={e => debounced(e.target.value)}
		/>
	)
}

export default Search
