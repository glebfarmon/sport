export type TSettingsTabs = 'general' | 'account' | 'password'

export interface ISettingsProps {
	tab: TSettingsTabs
}

export interface ISearchParams {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}
