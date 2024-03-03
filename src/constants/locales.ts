export const LOCALES_FULL: Record<string, string> = {
	en: 'English',
	pl: 'Polski'
}
export const LOCALES: string[] = Object.keys(LOCALES_FULL)
export const DEFAULT_LOCALE: string = LOCALES[0]
export const LOCALE_PREFIX: 'always' | 'as-needed' | 'never' = 'as-needed'
