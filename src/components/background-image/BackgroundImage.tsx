// @ts-ignore
import type { CSS } from '@nextui-org/react'
import {
  BackgroundImageStyle,
  Container,
  Content
} from './BackgroundImage.styles'

type BackgroundImageProps = {
  src: string | any
  alt?: string
  fullscreen?: boolean
  children?: React.ReactNode
  css?: CSS
}

const BackgroundImage = ({
  alt,
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

  return (
    <Container css={styledDimensions}>
      <BackgroundImageStyle
        alt={alt || 'Image'}
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
        css={{
          ...css
        }}
      />
      <Content css={styledDimensions}>{children}</Content>
    </Container>
  )
}

export default BackgroundImage
