'use client'

import { CategoriesSummaryContents } from '@/modules/categories/models'

import Header from './Header'
import FloatingSocials from './FloatingSocials'
import Categories from './Categories'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import BlitoFrontPage from '@/assets/images/bg-haeder_home.png'
import SplahPage from '@/assets/images/splah-push.png'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import Image from 'next/image'
import { styled } from '@nextui-org/react'

const ImageSplash = styled(Image, {
  opacity: '.6',
  position: 'absolute',
  right: '-42%',
  top: '0'
})

const Home = ({ categories }: { categories: CategoriesSummaryContents }) => {
  return (
    <>
      <ParallaxBanner style={{ height: `calc(100vh - ${HEIGHT_NAVBAR})` }}>
        <ParallaxBannerLayer image={BlitoFrontPage.src} speed={10} />
        <ParallaxBannerLayer speed={-30}>
          <ImageSplash
            src={SplahPage.src as string}
            alt="Photo of background"
            width={900}
            height={900}
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={0}>
          <ImageSplash
            src={SplahPage.src as string}
            alt="Photo of background"
            width={900}
            height={900}
            css={{
              bottom: '5%',
              left: '-43%',
              right: 'auto',
              top: 'auto'
            }}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-20}>
          <Header />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <Categories categories={categories} />
      <FloatingSocials />
    </>
  )
}

export default Home
