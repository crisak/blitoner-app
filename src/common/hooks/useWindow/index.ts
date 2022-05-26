import { useEffect, useState } from "react"

const useWindow = () => {
  const [isSSR, setIsSSR] = useState(true)
  const [windowObj, setWindowObj] = useState<Window | null>(null)

  useEffect(() => {
    setIsSSR(false)
    if (typeof window !== "undefined") setWindowObj(window)
  }, [])

  return { isSSR, windowObj }
}

export default useWindow