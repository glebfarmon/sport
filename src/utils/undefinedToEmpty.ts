interface IObj<T> {
  [key: string]: T
}

export const undefinedToEmpty = (obj: IObj<string | undefined>) => {
  const newObj: IObj<string> = {}
  for (const key in obj) {
    newObj[key] = obj[key] ?? ''
  }
  return newObj
}
