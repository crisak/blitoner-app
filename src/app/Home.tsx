'use client'

import { Text } from '@/components'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'

import { CategoriesSummaryContents } from '@/modules/categories/models'
import {
  ContentProjects,
  Header,
  CategoryContent,
  SectionCategory
} from './Home.styles'
import { CardLinkImage, FloatingSocials } from './components'
import { Button, Container } from '@nextui-org/react'
import Image from 'next/image'

const Home = ({ categories }: { categories: CategoriesSummaryContents }) => {
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
      </Header>

      <FloatingSocials />

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
