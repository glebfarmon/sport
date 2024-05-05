import {useEffect} from 'react'
import type {UseFormReset} from 'react-hook-form'
import {useGetUserQuery} from '@/store/api/user.api'
import type {TOutputFormSchema} from '@/modules/settings/account/form/use-form-schema'

export const useInitialData = (reset: UseFormReset<TOutputFormSchema>) => {
	const {data, isSuccess} = useGetUserQuery()

	useEffect(() => {
		if (isSuccess && data) {
			reset({
				username: data.username,
				full_name: data.full_name
			})
		}
	}, [isSuccess])

	return isSuccess
}
