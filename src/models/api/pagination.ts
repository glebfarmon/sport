export interface IPagination<T> {
	data: T
	meta: IPaginationMeta
}

interface IPaginationMeta {
	lastPage: number
}

export interface IPaginationParams {
	search: string
	page: number
}
