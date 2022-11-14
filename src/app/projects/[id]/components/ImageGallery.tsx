import Image from 'next/image'
// import { useState } from 'react'
import type { ThumbnailImageProps } from 'react-grid-gallery'

export const WIDTH = 236

export const HEIGHT = 354

const ImageGallery = (props: ThumbnailImageProps) => {
  console.log(props)

  // eslint-disable-next-line jsx-a11y/alt-text
  const styleImage = {
    ...props.imageProps.style,
    height: `${HEIGHT}px`,
    width: `${WIDTH}px`,
    objectFit: 'cover'
  } as React.CSSProperties
  return (
    <Image
      height={HEIGHT}
      width={WIDTH}
      {...props.imageProps}
      style={styleImage}
      title=""
    />
  )
}

export default ImageGallery
