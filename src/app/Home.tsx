'use client'

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
  CategoryContent,
  LinkSocial,
  SectionCategory
} from './Home.styles'
import { SplashSocial, CardLinkImage } from './components'
import { Button, Container } from '@nextui-org/react'
import Image from 'next/image'

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

      {categories.slice(0, 5).map((category, index) => {
        const odd = Boolean(index % 2)
        return (
          <Container key={index}>
            <SectionCategory className={odd ? `reverse-section` : ''}>
              <CategoryContent>
                <Text h2>{category.name}</Text>
                <Text css={{ mb: '$10' }}>{category.description}</Text>
                <Button>Ver más</Button>
              </CategoryContent>
              <ContentProjects>
                {category.projects.slice(0, 5).map((project, index) => (
                  <CardLinkImage
                    key={project.id}
                    className={`card-image__card-${index + 1}`}
                    {...project}
                  />
                ))}
              </ContentProjects>
            </SectionCategory>
          </Container>
        )
      })}
    </>
  )
}

export default Home
