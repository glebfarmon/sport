'use client'

import {HTMLInputTypeAttribute, useCallback, useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useTranslations} from 'next-intl'
import Link from 'next/link'

interface IFormData<T> {
  name: T
  placeholder: string
  type: HTMLInputTypeAttribute
  autocomplete: HTMLInputElement['autocomplete']
}

export const Login = () => {
  const t = useTranslations('Auth')
  const e = useTranslations('Errors')

  const formSchema = useMemo(
    () =>
      z.object({
        username: z
          .string()
          .min(2, {
            message: e('min_length', {name: t('Form.username'), count: 2}, {})
          })
          .max(32, {
            message: e('max_length', {name: t('Form.username'), count: 32})
          }),
        password: z
          .string()
          .min(6, {
            message: e('min_length', {name: t('Form.password'), count: 6})
          })
          .max(64, {
            message: e('max_length', {name: t('Form.password'), count: 64})
          })
      }),
    []
  )

  const formData: IFormData<keyof z.infer<typeof formSchema>>[] = useMemo(
    () => [
      {name: 'username', placeholder: 'glebfarmon', type: 'text', autocomplete: 'username'},
      {name: 'password', placeholder: '123456', type: 'password', autocomplete: 'new-password'}
    ],
    [formSchema]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      console.log(values)
    },
    [formSchema]
  )

  return (
    <div className={'grid h-screen place-items-center'}>
      <div className={'flex flex-col'}>
        <p className={'mb-2 text-center text-2xl font-semibold'}>{t('Login.greeting')}</p>
        <p className={'text-center text-sm text-muted-foreground'}>{t('Login.subgreeting')}</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={'mt-6 space-y-4 rounded-md border border-input p-4'}>
            {formData.map(({name, placeholder, type, autocomplete}, i) => (
              <FormField
                key={i}
                control={form.control}
                name={name}
                render={({field}) => (
                  <FormItem>
                    <FormLabel>{t(`Form.${name}`)}</FormLabel>
                    <FormControl>
                      <Input
                        className={'input-autofill'}
                        placeholder={placeholder}
                        type={type}
                        autoComplete={autocomplete}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className={'flex justify-between'}>
              <Button type={'submit'}>{t('Form.login')}</Button>
              <Button variant={'outline'} type={'button'} asChild>
                <Link href={'/auth/register'}>{t('Form.register')}</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
