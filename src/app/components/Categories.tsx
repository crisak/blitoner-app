import { Text } from '@/components'
import { CategoriesSummaryContents } from '@/modules/categories/models'
import { Button, Container } from '@nextui-org/react'
import { CardLinkImage } from './CardImage'
import {
  CategoryContent,
  ContentProjects,
  SectionCategory
} from './Home.styles'

type CategoriesProps = { categories: CategoriesSummaryContents }

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
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

export default Categories
