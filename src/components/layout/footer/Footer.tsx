import { Text } from '@/components/text'
import { Container, Grid, Row } from '@nextui-org/react'
import { FooterStyle } from './Footer.styles'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'

import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsMailbox,
  BsWhatsapp
} from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  return (
    <FooterStyle
      css={{
        bgBlur: '#0000008e'
      }}
    >
      <Container>
        <Grid.Container gap={2}>
          <Grid md direction="column">
            <Text h3>Menu</Text>

            <Row
              css={{
                flexDirection: 'column',
                gap: '$5',
                '& > *': {
                  display: 'block'
                }
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/proyectos">Projects</Link>
              <Link href="/contacto">Formulario de contacto</Link>
              <Link href="/login">Ingresar como administrado</Link>
            </Row>
          </Grid>

          <Grid
            md
            direction="column"
            css={{
              '& > a': {
                display: 'block',
                mb: '$5'
              }
            }}
          >
            <Text h3>Información de contacto</Text>

            <Link href="https://www.instagram.com/blito.col/" target="_blank">
              <Row align="center">
                <BsInstagram />
                <Text css={{ ml: '$5' }}>Instagram</Text>
              </Row>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ"
              target="_blank"
            >
              <Row align="center">
                <BsYoutube />
                <Text css={{ ml: '$5' }}>YouTube</Text>
              </Row>
            </Link>

            <Link href="https://www.facebook.com/loxorea" target="_blank">
              <Row align="center">
                <BsFacebook />
                <Text css={{ ml: '$5' }}>Facebook</Text>
              </Row>
            </Link>

            <Link href="mailto:loxoreacrew@gmail.com" target="_blank">
              <Row align="center">
                <BsMailbox />
                <Text css={{ ml: '$5' }}>Email</Text>
              </Row>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=573123574867"
              target="_blank"
            >
              <Row align="center">
                <BsWhatsapp />
                <Text css={{ ml: '$5' }}>Whatsapp</Text>
              </Row>
            </Link>
          </Grid>

          <Grid
            xs
            direction="column"
            justify="center"
            alignItems="center"
            css={{
              gap: '$5',
              '& > *': {
                textAlign: 'center',
                display: 'block'
              }
            }}
          >
            <Link href="/">
              <Image
                src={BlitoFrontPage}
                width={40}
                height={40}
                alt="Logo de portada"
                color="red"
              />
              <Text h2>Blitoner</Text>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
    </FooterStyle>
  )
}

export default Footer
