import type {IUpdateUser, IUser} from '@/models/api'
import {mainApi} from '@/store/api/main.api'

export const userApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getUser: builder.query<IUser, void>({
			query: () => ({
				url: '/users',
				credentials: 'include',
				method: 'GET'
			})
		}),
		updateUser: builder.mutation<void, IUpdateUser>({
			query: body => ({
				url: '/users',
				credentials: 'include',
				method: 'PATCH',
				body
			})
		})
	})
})

export const {useGetUserQuery, useUpdateUserMutation} = userApi
