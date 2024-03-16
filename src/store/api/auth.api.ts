import type {IAuthLogin, IAuthRegister, IIsAuthorized} from '@/models/api'
import {mainApi} from './main.api'

export const authApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		register: builder.mutation<void, IAuthRegister>({
			query: ({token, ...body}) => ({
				url: '/auth/register',
				credentials: 'include',
				method: 'POST',
				headers: {recaptcha: token},
				body
			})
		}),
		login: builder.mutation<void, IAuthLogin>({
			query: body => ({
				url: '/auth/login',
				credentials: 'include',
				method: 'POST',
				body
			})
		}),
		logout: builder.query<void, void>({
			query: () => ({
				url: '/auth/logout',
				credentials: 'include',
				method: 'POST'
			})
		}),
		isAuthorized: builder.query<boolean, void>({
			query: () => ({
				url: '/auth/check',
				credentials: 'include',
				method: 'GET'
			}),
			transformResponse: (response: IIsAuthorized) => response?.message === 'ok'
		})
	})
})

export const {useRegisterMutation, useLoginMutation, useLazyLogoutQuery, useIsAuthorizedQuery} =
	authApi
