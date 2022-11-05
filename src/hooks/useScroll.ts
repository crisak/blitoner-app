'use client'

import { useEffect, useState } from 'react'

const useScroll = () => {
  const [position, setPosition] = useState({
    pageYOffset: 0,
    hideHomePage: 1,
    heightWindow: 0
  })

  useEffect(() => {
    const initPageYOffset = window.pageYOffset
    const initHeightWindow = window?.screen?.height || 0

    setPosition((prev) => ({
      ...prev,
      heightWindow: initHeightWindow,
      pageYOffset: initPageYOffset,
      hideHomePage: initHeightWindow - initPageYOffset
    }))

    const onScroll = () => {
      const pageYOffset = window.pageYOffset
      setPosition((prev) => ({
        ...prev,
        pageYOffset,
        hideHomePage: prev.heightWindow - pageYOffset
      }))
    }

    document.removeEventListener('scroll', onScroll)
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return position
}

export default useScroll
