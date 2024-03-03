import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {mainApi} from '@/store/api/main.api'

const rootReducer = combineReducers({
	[mainApi.reducerPath]: mainApi.reducer
})

export const makeStore = (initialState = {}) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware)
	})

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
