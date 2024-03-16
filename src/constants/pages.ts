class PAGES_LIST {
	ROOT = '/i'

	LOGIN = '/auth/login'
	REGISTER = '/auth/register'
	EXERCISES = `${this.ROOT}/exercises`
	HISTORY = `${this.ROOT}/history`
	PROGRESS = `${this.ROOT}/progress`
	ROUTINES = `${this.ROOT}/routines`
	SETTINGS = `${this.ROOT}/settings`
}

export const PAGES = new PAGES_LIST()
