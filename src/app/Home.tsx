'use client'

import { use } from 'react'
import Image from 'next/image'
// import { Button, Container } from '@nextui-org/react'
import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs'
import { Text } from '@/components'
// import BgImage from '@/assets/images/bg-haeder_home.png'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import SplashImage1 from '@/assets/images/splash1.png'
import SplashImage2 from '@/assets/images/splash2.png'
import SplashImage3 from '@/assets/images/splash3.png'
// import BgImageCategory from '@/assets/images/bg-home-category.png'
// import { categoryService } from '@/modules/categories/services'
import { CategoriesSummaryContents } from '@/modules/categories/models'
import {
  ContainerSocialsHome,
  ContentProjects,
  Header,
  LeftContent,
  LinkSocial,
  SectionCategory
} from './Hole.styles'
import { SplashSocial, CardImage } from './components'
import { Button, Container } from '@nextui-org/react'

const Home = ({ categories }: { categories: CategoriesSummaryContents }) => {
  console.log('categories->', categories.length)

  return (
    <>
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

      {/* <SectionCategory>
        <LeftContent>
          <Text h3>{category.name}</Text>
          <Text css={{ mb: '$10' }}>{category.description}</Text>
          <Button>Mirar más</Button>
        </LeftContent>
        <ContentProjects>
          {category.projects.map((project, index) => (
            <CardImage key={project.id} {...project} index={index} />
          ))}
        </ContentProjects>
      </SectionCategory> */}

      {categories.slice(0).map((category, index) => {
        return (
          <Container key={index}>
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
                      <CardImage key={project.id} {...project} index={index} />
                    ))}
                  </ContentProjects>
                </>
              ) : (
                <>
                  <ContentProjects>
                    {category.projects.map((project, index) => (
                      <CardImage key={project.id} {...project} index={index} />
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
        )
      })}
    </>
  )
}

export default Home
