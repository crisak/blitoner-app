'use client'

import { BoxProps, Text } from '@/components'

import { BORDER_RADIUS } from '@/styles/variables'
import Image from 'next/image'
import styles from './CardImage.module.css'
import classnames from 'classnames'
import Tilt from 'react-parallax-tilt'
import Link from 'next/link'
import { Category } from '@/models/categories-summary.models'

const getDateFormat = (dateISOString: string) => {
  const instanceDate = new Date(dateISOString)

  return new Intl.DateTimeFormat('es-CO').format(instanceDate)
}

const MEASURE = '280'

type CardImageProps = BoxProps & Category['projects'][0]

export const CardLinkImage = ({
  image,
  date,
  name,
  id: projectId,
  className
}: CardImageProps) => {
  const classes = classnames(
    {
      [styles.parallax_effect_glare_scale]: true
    },
    className
  )

  return (
    <>
      <Link
        href={`/proyectos/${projectId}`}
        style={{
          zIndex: 4
        }}
      >
        <Tilt className={classes} perspective={500} scale={1.02}>
          <Image
            src={image}
            alt={`Phot of ${name}`}
            width={MEASURE}
            height={MEASURE}
            blurDataURL="data:..."
            style={{
              borderRadius: BORDER_RADIUS
            }}
          />
          <div className={styles.parallax_effect_glare_scale__inner_element}>
            <Text h3>{name}</Text>
            <Text as="span">{getDateFormat(date)}</Text>
          </div>
        </Tilt>
      </Link>
    </>
  )
}
