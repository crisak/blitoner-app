import MarkIconWhite from '@/assets/icons/ico-map-marker.png'
import { Marker as MarkerMaps, type MarkerProps } from '@react-google-maps/api'

const Marker = ({ ...props }: MarkerProps) => {
  return <MarkerMaps icon={MarkIconWhite.src} {...props} />
}

export default Marker
