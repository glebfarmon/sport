export interface IAuthLogin {
	username: string
	password: string
}

export interface IAuthRegister extends IAuthLogin {
	full_name: string
	token: string
}

export interface IIsAuthorized {
	message: string
}
