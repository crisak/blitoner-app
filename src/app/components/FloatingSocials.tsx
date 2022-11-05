import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs'
import { ContainerSocialsHome, LinkSocial } from '../Home.styles'
import { SplashSocial } from './SplashSocial'
import SplashImage1 from '@/assets/images/splash1.png'
import SplashImage2 from '@/assets/images/splash2.png'
import SplashImage3 from '@/assets/images/splash3.png'
import { useScroll } from '@/hooks'

const FloatingSocials = () => {
  const scroll = useScroll()

  const opacity = (1 * scroll.hideHomePage) / scroll.heightWindow

  return (
    <ContainerSocialsHome
      css={{
        opacity: opacity <= 0 ? '0' : opacity,
        display: opacity <= 0 ? 'none' : 'block'
      }}
    >
      <SplashSocial
        icon={
          <LinkSocial
            href="https://www.instagram.com/blito.col/?theme=dark"
            target="_blank"
          >
            <BsInstagram />
          </LinkSocial>
        }
        bgImg={SplashImage1.src}
      />
      <SplashSocial
        icon={
          <LinkSocial
            href="https://www.facebook.com/pabloalexanderguerrero"
            target="_blank"
          >
            <BsFacebook />
          </LinkSocial>
        }
        bgImg={SplashImage2.src}
      />
      <SplashSocial
        icon={
          <LinkSocial
            href="https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ"
            target="_blank"
          >
            <BsYoutube />
          </LinkSocial>
        }
        bgImg={SplashImage3.src}
      />
    </ContainerSocialsHome>
  )
}

export default FloatingSocials
