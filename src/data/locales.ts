export const localesFull: {[key: string]: string} = {
  en: 'English',
  pl: 'Polski'
}
export const locales: string[] = Object.keys(localesFull)
export const defaultLocale = locales[0]
export const localePrefix: 'always' | 'as-needed' | 'never' = 'as-needed'
