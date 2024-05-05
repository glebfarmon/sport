import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {TExerciseModal} from '@/models'

interface IExerciseSlice {
	modal: TExerciseModal
	search: string
	page: number
}

const initialState: IExerciseSlice = {
	modal: {action: null},
	search: '',
	page: 1
}

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	reducers: {
		setModal(state, action: PayloadAction<TExerciseModal>) {
			state.modal = action.payload
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload
		}
	}
})

export const {setModal, setPage, setSearch} = exerciseSlice.actions
export const exerciseReducer = exerciseSlice.reducer
