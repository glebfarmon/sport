interface TObj<T> {
  [key: string]: T
}

export const undefinedToEmpty = (obj: TObj<string | undefined>) => {
  const newObj: TObj<string> = {}
  for (const key in obj) {
    newObj[key] = obj[key] ?? ''
  }
  return newObj
}
