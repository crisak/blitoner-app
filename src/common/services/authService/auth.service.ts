import { AuthCognito } from "./auth.interface"
import { Nullable } from "../../../common/types"

const keyStorage = 'cognitoSession'

const validateWindow = () => typeof window !== "undefined"

export const save = (data: AuthCognito) => {
  if (!validateWindow()) return;
  window.localStorage.setItem(keyStorage, JSON.stringify(data))
}

export const remove = () => {
  if (!validateWindow()) return;
  window.localStorage.removeItem(keyStorage)
}

export const isAuthenticated = (): boolean => {
  if (!validateWindow()) return false;
  const data = window.localStorage.getItem(keyStorage)
  if (!data) {
    return false
  }

  const dataUser = JSON.parse(data)

  return Boolean(dataUser)
}

export const get = (): Nullable<AuthCognito> => {
  if (!validateWindow()) return null;
  const data = localStorage.getItem(keyStorage)
  if (!data) {
    return null
  }

  const dataUser = JSON.parse(data)

  return dataUser
}


