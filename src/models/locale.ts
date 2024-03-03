import {ReactNode} from 'react'

export interface IParamsLocale {
	params: {
		locale: string
	}
}

export interface IParamsLocaleChildren extends IParamsLocale {
	children: ReactNode
}
