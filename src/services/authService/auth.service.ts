import { AuthCognito } from './auth.interface'
import { Nullable } from '../../types'

const keyStorage = 'cognitoSession'

const validateWindow = (win: Window) => typeof win !== 'undefined'

export const save = (win: Window, data: AuthCognito) => {
  if (!validateWindow(win)) return
  win.localStorage.setItem(keyStorage, JSON.stringify(data))
}

export const remove = (win: Window) => {
  if (!validateWindow(win)) return
  win.localStorage.removeItem(keyStorage)
}

export const isAuthenticated = (win: Window): boolean => {
  if (!validateWindow(win)) return false
  const data = win.localStorage.getItem(keyStorage)
  if (!data) {
    return false
  }

  const dataUser = JSON.parse(data)

  return Boolean(dataUser)
}

export const get = (win: Window): Nullable<AuthCognito> => {
  if (!validateWindow(win)) return null
  const data = win.localStorage.getItem(keyStorage)
  if (!data) {
    return null
  }

  const dataUser = JSON.parse(data)

  return dataUser
}
