'use client'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import { images } from './images'
import StackGrid from 'react-stack-grid'
import { BORDER_RADIUS } from '@/styles/variables'
import { Box } from '@/components'
import Image from 'next/image'
import { contentGallery } from '@/utils/db-images'

export const WIDTH = 200

export const HEIGHT = 300

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const ContentGallery = ({ projectId }: any) => {
  const [index, setIndex] = useState(-1)
  const images = contentGallery.filter(({ projectId: id }) => id === projectId)

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index: number, item?: any) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <>
      <Box
        css={{
          '& > *:hover .content-image img': {
            filter: 'blur(1px) grayscale(90%)'
          },
          '& .content-image:hover img': {
            filter: 'blur(0)'
          }
        }}
      >
        <StackGrid
          columnWidth={WIDTH}
          duration={480}
          gutterWidth={20}
          gutterHeight={20}
        >
          {images.map(({ src }, index) => (
            <Box
              key={index.toString()}
              onClick={() => handleClick(index)}
              className="content-image"
              css={{
                cursor: 'pointer',
                '& img': {
                  transition: 'all .3s',
                  '&:hover': {
                    transform: 'scale(1.1)'
                  }
                }
              }}
            >
              <Image
                src={src}
                alt={src}
                width={WIDTH}
                height={HEIGHT}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(WIDTH, HEIGHT)
                )}`}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: BORDER_RADIUS
                }}
              />
            </Box>
          ))}
        </StackGrid>
      </Box>

      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.original}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  )
}

export default ContentGallery
