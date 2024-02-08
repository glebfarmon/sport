export const localesFull: Record<string, string> = {
  en: 'English',
  pl: 'Polski'
}
export const locales: string[] = Object.keys(localesFull)
export const defaultLocale: string = locales[0]
export const localePrefix: 'always' | 'as-needed' | 'never' = 'as-needed'
