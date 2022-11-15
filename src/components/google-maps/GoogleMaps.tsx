import { BORDER_RADIUS } from '@/styles/variables'
import { Spinner } from '@nextui-org/react'
import {
  type GoogleMapProps,
  GoogleMap,
  useJsApiLoader
} from '@react-google-maps/api'
import { Text } from '../text'
import darkModeStyles from './dark-mode.styles'

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: BORDER_RADIUS
} as React.CSSProperties

const center = {
  lat: 4.583575333811246,
  lng: -74.2199577402386
}

const GoogleMaps = ({
  mapContainerStyle,
  options,
  ...props
}: GoogleMapProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY || ''
  })

  const renderMap = () => {
    /**
     * wrapping to a function is useful in case you want to access `window.google`
     * to eg. setup options or create latLng object, it won't be available otherwise
     * feel free to render directly if you don't need that
     */
    const optionsMaps = {
      styles: darkModeStyles,
      ...options
    } as google.maps.MapOptions

    const mapContainerStyles = {
      ...containerStyle,
      ...mapContainerStyle
    } as React.CSSProperties

    return (
      <GoogleMap
        options={optionsMaps}
        mapContainerStyle={mapContainerStyles}
        center={center}
        zoom={17}
        {...props}
      />
    )
  }
  if (loadError) {
    return (
      <Text blockquote color="error">
        Error al cargar el mapa
      </Text>
    )
  }

  return isLoaded ? renderMap() : <Spinner />
}

export default GoogleMaps
