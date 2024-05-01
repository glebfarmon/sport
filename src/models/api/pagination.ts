export interface IPagination<T> {
	data: T
	meta: IPaginationMeta
}

export interface IPaginationMeta {
	total: number
	lastPage: number
	currentPage: number
	prev: number | null
	next: number | null
}

export interface IPaginationParams {
	page: number
	search: string
}

export type TPaginationSetParams = (
	state: (prevState: IPaginationParams) => IPaginationParams
) => void

export interface IPaginationSetParams {
	setParams: TPaginationSetParams
}
