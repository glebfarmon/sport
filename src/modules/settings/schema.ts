import {fallback, parse, picklist} from 'valibot'
import {TSettingsTabs} from '@/models'

const allowedValues: TSettingsTabs[] = ['general', 'account', 'password']

const TabSchema = fallback(picklist(allowedValues), allowedValues[0])

export const parseTab = (tab: unknown) => parse(TabSchema, tab)
