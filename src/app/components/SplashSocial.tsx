import { SplashStyle } from './Home.styles'
import type { ReactNode } from 'react'

type SplashSocialIcon = { icon: ReactNode; bgImg: string }

export const SplashSocial = ({ icon, bgImg }: SplashSocialIcon) => {
  return (
    <SplashStyle css={{ backgroundImage: `url(${bgImg});` }}>
      {icon}
    </SplashStyle>
  )
}
