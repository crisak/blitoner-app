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
    const eleScroll = document.querySelector('.body-container')
    const initHeightWindow = eleScroll?.scrollTop || 0

    setPosition((prev) => ({
      ...prev,
      heightWindow: initHeightWindow,
      pageYOffset: initPageYOffset,
      hideHomePage: initHeightWindow - initPageYOffset
    }))

    const onScroll = () => {
      const pageYOffset =
        document.querySelector('.body-container')?.scrollTop || 0

      setPosition((prev) => ({
        ...prev,
        pageYOffset,
        hideHomePage: prev.heightWindow - pageYOffset
      }))
    }

    eleScroll?.removeEventListener('scroll', onScroll)

    eleScroll?.addEventListener('scroll', onScroll)
    return () => {
      eleScroll?.removeEventListener('scroll', onScroll)
    }
  }, [])

  return position
}

export default useScroll
