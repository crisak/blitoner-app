'use client'

import { Text } from '@/components'
import Image from 'next/image'
import { Header as HeaderStyle } from './Home.styles'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <HeaderStyle>
      <Fade bottom>
        <Image
          src={BlitoFrontPage}
          width={100}
          height={110}
          alt="Logo de portada"
          color="red"
        />
      </Fade>

      <Text h1 size="5rem">
        <Fade bottom>Blito</Fade>
      </Text>
      <Text h2 css={{ textAlign: 'center' }}>
        <Fade bottom>Deja entrar el color a tu vida</Fade>
      </Text>
    </HeaderStyle>
  )
}

export default Header
