import type {IExercise, IPagination, IPaginationParams} from '@/models/api'
import {mainApi} from '@/store/api/main.api'
import {convertToFormData} from '@/hooks/convert-to-formdata'

export const exerciseApi = mainApi.enhanceEndpoints({addTagTypes: ['Exercise']}).injectEndpoints({
	endpoints: builder => ({
		getExercises: builder.query<IPagination<IExercise[]>, IPaginationParams>({
			query: ({page, search}) => ({
				url: `/exercises?${new URLSearchParams({page: String(page), search})}`,
				credentials: 'include',
				method: 'GET'
			}),
			providesTags: ['Exercise']
		}),
		getExercise: builder.query<IExercise, string>({
			query: id => ({
				url: `/exercises/${id}`,
				credentials: 'include',
				method: 'GET'
			}),
			providesTags: ['Exercise']
		}),
		createExercise: builder.mutation<void, Omit<IExercise<File>, 'id' | 'editable'>>({
			query: body => {
				return {
					url: '/exercises',
					credentials: 'include',
					method: 'POST',
					body: convertToFormData(body)
				}
			},
			invalidatesTags: ['Exercise']
		}),
		// updateExerciseOrder: builder.mutation<void, string[]>({
		// 	query: body => ({
		// 		url: '/exercises/update-order',
		// 		credentials: 'include',
		// 		method: 'PATCH',
		// 		body
		// 	})
		// }),
		updateExercise: builder.mutation<IExercise, Partial<Omit<IExercise<File>, 'isPublic'>>>({
			query: ({id, ...body}) => ({
				url: `/exercises/${id}`,
				credentials: 'include',
				method: 'PATCH',
				body: convertToFormData(body)
			}),
			invalidatesTags: ['Exercise']
		}),
		deleteExercise: builder.mutation<void, string>({
			query: id => ({
				url: `/exercises/${id}`,
				credentials: 'include',
				method: 'DELETE'
			}),
			invalidatesTags: ['Exercise']
		})
	})
})

export const {
	useGetExercisesQuery,
	useLazyGetExercisesQuery,
	useGetExerciseQuery,
	useCreateExerciseMutation,
	useUpdateExerciseMutation,
	useDeleteExerciseMutation
} = exerciseApi
