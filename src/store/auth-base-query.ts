import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'
import {Mutex} from 'async-mutex'
import {toast} from '@/components/ui/use-toast'
import {config} from '@/config'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
	baseUrl: config.api_url,
	credentials: 'include'
})

const authBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions
) => {
	await mutex.waitForUnlock()
	let result = await baseQuery(args, api, extraOptions)

	if (result?.error?.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()
			try {
				const refreshResult = await baseQuery(
					{credentials: 'include', url: '/auth/refresh', method: 'POST'},
					api,
					extraOptions
				)
				if (refreshResult.data) {
					result = await baseQuery(args, api, extraOptions)
				}
			} finally {
				release()
			}
		} else {
			await mutex.waitForUnlock()
			result = await baseQuery(args, api, extraOptions)
		}
	} else if (result?.error) {
		if ('data' in result.error) {
			const data = result.error.data as {errors?: string[]; message?: string}
			if ('errors' in data && data.errors instanceof Array) {
				for (const error of data.errors) {
					toast({description: error})
				}
			} else if ('message' in data) {
				toast({description: data.message ?? 'Unexpected error'})
			}
		} else {
			toast({description: 'Unexpected error'})
		}
	}

	return result
}

export default authBaseQuery
