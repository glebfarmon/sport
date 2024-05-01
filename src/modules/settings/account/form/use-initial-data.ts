import {useEffect} from 'react'
import type {UseFormReset} from 'react-hook-form'
import {useGetUserQuery} from '@/store/api/user.api'
import type {TOutputFormSchema} from '@/modules/settings/account/form/use-form-schema'

export const useInitialData = (reset: UseFormReset<TOutputFormSchema>) => {
	const {data, isSuccess, isFetching} = useGetUserQuery()

	useEffect(() => {
		if (isSuccess && !isFetching && data) {
			reset({
				username: data.username,
				full_name: data.full_name
			})
		}
	}, [isSuccess, isFetching])
}
