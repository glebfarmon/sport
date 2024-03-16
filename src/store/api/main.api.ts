import {createApi} from '@reduxjs/toolkit/query/react'
import authBaseQuery from '@/store/auth-base-query'

export const mainApi = createApi({
	reducerPath: 'main/api',
	baseQuery: authBaseQuery,
	endpoints: () => ({})
})
