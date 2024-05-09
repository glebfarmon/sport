import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {mainApi} from '@/store/api/main.api'
import {exerciseReducer, exerciseSlice} from '@/store/slices/exercise.slice'

const rootReducer = combineReducers({
	[mainApi.reducerPath]: mainApi.reducer,
	[exerciseSlice.name]: exerciseReducer
})

export const makeStore = (initialState = {}) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware)
	})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
