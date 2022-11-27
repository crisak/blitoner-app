'use client'
import { Box, Text } from '@/components'
import { formatDate } from '@/utils'
import { CSS } from '@nextui-org/react'
import { Project } from '../models'
import Image from 'next/image'
import { BsPinMap } from 'react-icons/bs'
import { BORDER_RADIUS } from '@/styles/variables'

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

type CardProjectProps = Project

const MEASURE = 300

const selector = '& .content-text h3, & .content-text span'

const styles: CSS = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: `${MEASURE * 1.5}px 150px`,
  position: 'relative',
  boxSizing: 'border-box',

  '&::after': {
    content: '',
    width: '30%',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '1px',
    backgroundColor: '$gray300',
    transition: 'all .3s'
  },

  [selector]: {
    transition: 'all .3s',
    opacity: 0.7
  },

  '&:hover': {
    [selector]: {
      opacity: 1
    } as CSS,

    '&::after': {
      backgroundColor: '$primaryBorderHover',
      width: '80%'
    },

    img: {
      border: '1px solid $primarySolidHover',
      boxShadow: `
      rgba(255, 255, 255, .5) 0px 0px 0.01rem,
      rgba(255, 255, 255, .5) 0px 0px 0.01rem,
      rgba(54, 148, 255, .5) 0px 0px 0.5rem,
      rgba(54, 148, 255, .5) 0px 0px 0.5rem,
      rgba(54, 148, 255, .5) 0px 0px 0.5rem,
      rgba(54, 148, 255, .5) 0px 0px 0.5rem inset`
    } as CSS
  }
}

const stylesContainerStyles: CSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}

let MEASURE_SUM_RIGHT = 20
let MEASURE_SUM_TOP = 2

const rotates = [...Array(4).fill(0)].reduce((prev, _, index) => {
  const indexCal: number = index + 1

  const calcRight: number = MEASURE_SUM_RIGHT * indexCal
  const calcTop: number = MEASURE_SUM_TOP * indexCal

  const isEven: boolean = Boolean(index % 2 === 0)

  const rotate: number = isEven
    ? randomIntFromInterval(5, 9)
    : randomIntFromInterval(350, 365)

  const key: string = `&:nth-child(${index + 1})`

  return {
    ...prev,
    [key]: {
      top: calcTop,
      right: calcRight,
      transform: `rotate(${rotate}deg)`,
      transition: 'all .3s',
      zIndex: 1,

      '&:hover': {
        transform: `scale(1.3) rotate(0deg)`,
        zIndex: 2
      }
    } as CSS
  }
}, {} as CSS)

const styledContentImages: CSS = {
  position: 'relative',
  height: `${MEASURE + MEASURE_SUM_TOP * 4}px`,
  width: `${MEASURE + MEASURE_SUM_RIGHT * 4}px`,

  '& > *': {
    position: 'absolute',
    top: '0',
    right: '40%',
    ...rotates,
    '& img, &': {
      borderRadius: BORDER_RADIUS
    }
  }
}

const stylesContentText: CSS = {
  pb: '$10',
  textAlign: 'center',
  boxSizing: 'border-box'
}

const replaceImage = (url: string, number: number) => {
  const newUrl = url.replace('-1', `-${number}`)
  return newUrl
}

const CardProject = ({ name, date, location, banner }: CardProjectProps) => {
  return (
    <Box css={styles}>
      <Box css={stylesContainerStyles}>
        <Box css={styledContentImages}>
          <Image src={banner} width={MEASURE} height={MEASURE} alt={name} />

          <Image
            src={replaceImage(banner, 2)}
            width={MEASURE}
            height={MEASURE}
            alt={name}
          />

          <Image
            src={replaceImage(banner, 3)}
            width={MEASURE}
            height={MEASURE}
            alt={name}
          />

          <Image
            src={replaceImage(banner, 4)}
            width={MEASURE}
            height={MEASURE}
            alt={name}
          />
        </Box>
      </Box>

      <Box css={stylesContentText} className="content-text">
        <Text h3 css={{ mb: '$2' }}>
          {name}
        </Text>
        <Text span>{formatDate(date)}</Text>
        <Box>
          <Text span css={{ mr: '$5' }}>
            <BsPinMap />
          </Text>

          <Text span>{location.state}</Text>
        </Box>
      </Box>
    </Box>
  )
}
export default CardProject
