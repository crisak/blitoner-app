'use client'

import { Text } from '@/components'
import Image from 'next/image'
import { Header as HeaderStyle } from './Home.styles'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'

const Header = () => {
  return (
    <HeaderStyle>
      <Image
        src={BlitoFrontPage}
        width={100}
        height={110}
        alt="Logo de portada"
        color="red"
      />
      <Text h1 size="5rem">
        Blito
      </Text>
      <Text h2 css={{ textAlign: 'center' }}>
        Deja volar tu imaginación
      </Text>
    </HeaderStyle>
  )
}

export default Header
