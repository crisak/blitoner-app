import type { CSS } from '@nextui-org/react'
import { Background, Container, Content } from './BackgroundImage.styles'

type BackgroundImageProps = {
  src: string
  fullscreen?: boolean
  children?: React.ReactNode
  css?: CSS
}

const BackgroundImage = ({
  css,
  src,
  fullscreen,
  children
}: BackgroundImageProps) => {
  const styledDimensions: CSS = {}

  if (fullscreen) {
    styledDimensions.height = '100vh'
    styledDimensions.width = '100vw'
  }

  const { background } = css || {}

  const backgroundImage = background
    ? `${background}, url(${src})`
    : `url(${src})`

  return (
    <Container css={styledDimensions}>
      <Background
        css={{
          ...css,
          backgroundImage,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover',
          ...styledDimensions
        }}
      />
      <Content css={styledDimensions}>{children}</Content>
    </Container>
  )
}

export default BackgroundImage
