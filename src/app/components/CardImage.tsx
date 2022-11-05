import { Text } from '@/components'
import { CategoriesSummaryContents } from '@/modules/categories/models'
import { Card, Col, CSS } from '@nextui-org/react'

export const CardImage = ({
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
