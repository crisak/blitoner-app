'use client'

import BgFormContact from '@/assets/images/bg-form-contact.jpg'
import { Box } from '@/components'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import { Col, Row } from '@nextui-org/react'
import Image from 'next/image'
import Form from './components/Form'

const ContactPage = () => {
  return (
    <Box
      css={{
        height: `calc(100vh - ${HEIGHT_NAVBAR})`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr'
      }}
    >
      <Box>
        <Image
          src={BgFormContact.src}
          alt="Grafiti con temática ambiental"
          fill
          style={{
            filter: 'brightness(.2) grayscale(.2)',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box
        css={{
          bgBlur: '#0000008e'
        }}
      >
        <Form />
      </Box>
    </Box>
  )
}

export default ContactPage
