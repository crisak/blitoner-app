'use client'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Card, Col, styled, Container, CSS } from '@nextui-org/react'
import { BackgroundImage, Text } from '@/components'
import BgImage from '@/assets/images/bg-haeder_home.png'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import SplashImage1 from '@/assets/images/splash1.png'
import SplashImage2 from '@/assets/images/splash2.png'
import SplashImage3 from '@/assets/images/splash3.png'
import BgImageCategory from '@/assets/images/bg-home-category.png'
import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs'
import { categoryService } from '@/modules/categories/services'
import { CategoriesSummaryContents } from '@/modules/categories/models'
import type { ReactNode } from 'react'

/**
 * Sections
 */
const Header = styled('header', {
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem'
})

const SectionCategory = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem'
})

/**
 * Sections one header
 */

const LinkSocial = styled('a', {
  color: '$primaryLight',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.3rem',
  borderRadius: '50%'
})

const SplashStyle = styled('div', {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '70px',
  height: '98px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '-2rem',
  opacity: 0.7,
  '& > svg': {
    color: '$primaryLight',
    fontSize: '$md'
  }
})

const ContainerSocialsHome = styled('div', {
  position: 'fixed',
  bottom: '4rem',
  right: '1rem'
})

type SplashSocialIcon = { icon: ReactNode; bgImg: string }

const SplashSocial = ({ icon, bgImg }: SplashSocialIcon) => {
  return (
    <SplashStyle css={{ backgroundImage: `url(${bgImg});` }}>
      {icon}
    </SplashStyle>
  )
}

/**
 * Sections by category
 */

const LeftContent = styled('div', {
  width: '100%',
  maxWidth: '300px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

const ContentProjects = styled('div', {
  position: 'relative',
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '2rem'
})

const CardImage = ({
  image,
  date,
  name,
  index
}: CategoriesSummaryContents[0]['projects'][0] & { index: number }) => {
  let css: CSS = {}
  if (index + 1 === 5) {
    css.position = 'absolute'
    css.top = '50%'
    css.left = '50%'
    css.transform = 'translateX(-50%) translateY(-50%)'
    css.width = '100%'
    css.maxWidth = '300px'
    css.height = '200px'
  }

  return (
    <Card css={css}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {date}
          </Text>
          <Text h4 color="white">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={image}
        objectFit="cover"
        width="100%"
        height={200}
        alt={`Imagen de project de ${name}`}
      />
    </Card>
  )
}

/**
 * @doc
 * SSR: Server side rendering
 * https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
 * Run server-inside
 * Sometime run client-inside
 */
export const getServerSideProps = async () => {
  const categories: CategoriesSummaryContents =
    await categoryService.getCategoriesSummaryContents()

  return {
    props: { categories }
  }
}

type ProjectProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Home: NextPage = ({ categories = [] }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <a rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundImage fullscreen src={BgImage}>
        <Header>
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
          <ContainerSocialsHome>
            <SplashSocial
              icon={
                <LinkSocial
                  href="https://www.instagram.com/blito.col/?theme=dark"
                  target="_blank"
                >
                  <BsInstagram />
                </LinkSocial>
              }
              bgImg={SplashImage1.src}
            />
            <SplashSocial
              icon={
                <LinkSocial
                  href="https://www.facebook.com/pabloalexanderguerrero"
                  target="_blank"
                >
                  <BsFacebook />
                </LinkSocial>
              }
              bgImg={SplashImage2.src}
            />
            <SplashSocial
              icon={
                <LinkSocial
                  href="https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ"
                  target="_blank"
                >
                  <BsYoutube />
                </LinkSocial>
              }
              bgImg={SplashImage3.src}
            />
          </ContainerSocialsHome>
        </Header>
      </BackgroundImage>
      {categories.slice(0, 5).map((category, index) => {
        return (
          <BackgroundImage key={category.id} fullscreen src={BgImageCategory}>
            <Container>
              <SectionCategory>
                {index % 2 === 0 ? (
                  <>
                    <LeftContent>
                      <Text h3>{category.name}</Text>
                      <Text css={{ mb: '$10' }}>{category.description}</Text>
                      <Button>Mirar más</Button>
                    </LeftContent>
                    <ContentProjects>
                      {category.projects.map((project, index) => (
                        <CardImage
                          key={project.id}
                          {...project}
                          index={index}
                        />
                      ))}
                    </ContentProjects>
                  </>
                ) : (
                  <>
                    <ContentProjects>
                      {category.projects.map((project, index) => (
                        <CardImage
                          key={project.id}
                          {...project}
                          index={index}
                        />
                      ))}
                    </ContentProjects>
                    <LeftContent>
                      <Text h3>{category.name}</Text>
                      <Text css={{ mb: '$10' }}>{category.description}</Text>
                      <Button>Mirar más</Button>
                    </LeftContent>
                  </>
                )}
              </SectionCategory>
            </Container>
          </BackgroundImage>
        )
      })}
    </>
  )
}

export default Home
