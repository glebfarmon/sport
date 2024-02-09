'use client'

import {HTMLInputTypeAttribute, useCallback, useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useTranslations} from 'next-intl'
import {useReCaptcha} from 'next-recaptcha-v3'
import {toast} from '@/components/ui/use-toast'
import Link from 'next/link'

interface IFormData<T> {
  name: T
  placeholder: string
  type: HTMLInputTypeAttribute
  autocomplete: HTMLInputElement['autocomplete']
}

export const Register = () => {
  const [t, e] = [useTranslations('Auth'), useTranslations('Errors')]
  const {error, executeRecaptcha} = useReCaptcha()

  const formSchema = useMemo(
    () =>
      z
        .object({
          full_name: z
            .string()
            .min(3, {
              message: e('min_length', {name: t('Form.full_name'), count: 3})
            })
            .max(48, {
              message: e('max_length', {name: t('Form.full_name'), count: 48})
            })
            .refine(
              value => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
              e('alphabets', {name: t('Form.full_name')})
            )
            .refine(value => /^[a-zA-Z]+\s+[a-zA-Z]+$/.test(value), e('full_name')),
          username: z
            .string()
            .min(2, {
              message: e('min_length', {name: t('Form.username'), count: 2})
            })
            .max(32, {
              message: e('max_length', {name: t('Form.username'), count: 32})
            })
            .refine(value => /^[a-zA-Z0-9_.-]+$/.test(value), e('strict')),
          password: z
            .string()
            .min(6, {
              message: e('min_length', {name: t('Form.password'), count: 6})
            })
            .max(64, {
              message: e('max_length', {name: t('Form.password'), count: 64})
            }),
          repeat_password: z.string()
        })
        .refine(data => data.password === data.repeat_password, {
          message: e('not_matching', {name: t('Form.passwords')}),
          path: ['repeat_password']
        }),
    []
  )

  const formData: IFormData<keyof z.infer<typeof formSchema>>[] = useMemo(
    () => [
      {name: 'full_name', placeholder: 'Troy Walker', type: 'text', autocomplete: 'name'},
      {name: 'username', placeholder: 'fernstalk', type: 'text', autocomplete: 'username'},
      {name: 'password', placeholder: '123456', type: 'password', autocomplete: 'new-password'},
      {
        name: 'repeat_password',
        placeholder: '123456',
        type: 'password',
        autocomplete: 'new-password'
      }
    ],
    [formSchema]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      username: '',
      password: '',
      repeat_password: ''
    }
  })

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      if(!executeRecaptcha) {
        toast({
          title: 'Google ReCaptcha',
          description: e('recaptcha'),
          variant: 'destructive'
        })
        return
      }
      const token = await executeRecaptcha('register_submit')
    },
    [formSchema, executeRecaptcha]
  )

  return (
    <div className={'grid h-screen place-items-center'}>
      <div className={'flex flex-col'}>
        <p className={'mb-2 text-center text-2xl font-semibold'}>{t('Register.greeting')}</p>
        <p className={'text-center text-sm text-muted-foreground'}>{t('Register.subgreeting')}</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={'mt-6 max-w-[400px] space-y-4 rounded-md border border-input p-4'}>
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
              <Button type={'submit'}>{t('Form.register')}</Button>
              <Button variant={'outline'} type={'button'} asChild>
                <Link href={'/auth/login'}>{t('Form.login')}</Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
