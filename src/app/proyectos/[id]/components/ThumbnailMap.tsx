import { Box, GoogleMaps, Marker } from '@/components'
import { BORDER_RADIUS } from '@/styles/variables'
import { CSS, Modal } from '@nextui-org/react'
import { useState } from 'react'

type ThumbnailMapProps = {
  position: {
    lat: number
    lng: number
  }
}

const containerThumbnailMap = {
  width: 300,
  height: 300,
  position: 'relative',
  transition: 'all .3s',
  '&::after': {
    content: '',
    transition: 'all .3s',
    backgroundColor: 'auto'
  },
  '&:hover': {
    transition: 'all .3s',
    zIndex: 10,
    cursor: 'pointer',

    '&::after': {
      content: '🔎 Abrir mapa',
      transition: 'all .3s',
      borderRadius: BORDER_RADIUS,
      backgroundColor: '#09192b90',
      color: '#ffffff',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      fontSize: '$3xl',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(3px)'
    } as CSS
  }
} as CSS

const ThumbnailMap = ({ position }: ThumbnailMapProps) => {
  const [visible, setVisible] = useState(false)

  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <>
      <Box onClick={() => setVisible(true)} css={containerThumbnailMap}>
        <GoogleMaps
          options={{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false
          }}
          center={position}
          zoom={14}
          mapContainerStyle={{
            maxWidth: '300px',
            height: '300px'
          }}
        >
          <Marker position={position} />
        </GoogleMaps>
      </Box>
      <Modal
        closeButton
        scroll
        blur
        css={{
          pt: 0
        }}
        width="100%"
        aria-labelledby="modal-full-map"
        aria-describedby="ubicación-del-grafiti"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body
          css={{
            py: '$10'
          }}
        >
          <GoogleMaps
            options={{
              fullscreenControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: true
            }}
            center={position}
            zoom={14}
            mapContainerStyle={{
              width: '100%',
              height: '100vh'
            }}
          >
            <Marker position={position} />
          </GoogleMaps>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ThumbnailMap
