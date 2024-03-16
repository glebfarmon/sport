export interface IUser {
	full_name: string
	username: string
}

export interface IUpdateUser extends Partial<IUser> {
	password: string
	password_new?: string
}
