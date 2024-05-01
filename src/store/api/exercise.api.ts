import type {IExercise, IPagination, IPaginationParams} from '@/models/api'
import {mainApi} from '@/store/api/main.api'

export const exerciseApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getExercises: builder.query<IPagination<IExercise[]>, IPaginationParams>({
			query: ({page, search}) => ({
				url: `/exercises?${new URLSearchParams({page: String(page), search})}`,
				credentials: 'include',
				method: 'GET'
			})
		}),
		getExercise: builder.query<IExercise, string>({
			query: id => ({
				url: `/exercises/${id}`,
				credentials: 'include',
				method: 'GET'
			})
		}),
		createExercise: builder.mutation<void, IExercise>({
			query: body => ({
				url: '/exercises',
				credentials: 'include',
				method: 'POST',
				body
			})
		}),
		updateExerciseOrder: builder.mutation<void, string[]>({
			query: body => ({
				url: '/exercises/update-order',
				credentials: 'include',
				method: 'PATCH',
				body
			})
		}),
		updateExercise: builder.mutation<IExercise, {id: string; body: Partial<IExercise>}>({
			query: ({id, body}) => ({
				url: `/exercises/${id}`,
				credentials: 'include',
				method: 'PATCH',
				body
			})
		}),
		deleteExercise: builder.mutation<void, string>({
			query: id => ({
				url: `/exercises/${id}`,
				credentials: 'include',
				method: 'DELETE'
			})
		})
	})
})

export const {
	useGetExercisesQuery,
	useGetExerciseQuery,
	useCreateExerciseMutation,
	useUpdateExerciseOrderMutation,
	useUpdateExerciseMutation,
	useDeleteExerciseMutation
} = exerciseApi
