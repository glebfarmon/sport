import type {IUpdateUser, IUser} from '@/models/api'
import {mainApi} from '@/store/api/main.api'

export const userApi = mainApi.enhanceEndpoints({addTagTypes: ['User']}).injectEndpoints({
	endpoints: builder => ({
		getUser: builder.query<IUser, void>({
			query: () => ({
				url: '/users',
				credentials: 'include',
				method: 'GET'
			}),
			providesTags: ['User']
		}),
		updateUser: builder.mutation<void, IUpdateUser>({
			query: body => ({
				url: '/users',
				credentials: 'include',
				method: 'PATCH',
				body
			}),
			invalidatesTags: ['User']
		})
	})
})

export const {useGetUserQuery, useUpdateUserMutation} = userApi
