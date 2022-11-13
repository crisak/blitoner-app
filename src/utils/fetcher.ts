// @ts-nocheck

export const fetcher = (url: URL) => {
  const defaultUrl = process.env.NEXT_PUBLIC_BLITONER_API

  return fetch(`${defaultUrl}${url}`).then((res) => res.json())
}
