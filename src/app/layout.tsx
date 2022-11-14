'use client'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { Provider } from 'react-redux'
import store from '@/redux/store'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import { Navbar, Footer } from '@/components'
import { ParallaxProvider } from 'react-scroll-parallax'
import IcoBlitoWhite from '@/assets/images/icon-blito-white.ico'

const darkTheme = createTheme({
  type: 'dark'
})

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <head>
        <title>Blitoner - Blog</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={IcoBlitoWhite.src}
        />
      </head>
      <body>
        <ParallaxProvider>
          <NextUIProvider theme={darkTheme}>
            <Provider store={store}>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </Provider>
          </NextUIProvider>
        </ParallaxProvider>
      </body>
    </html>
  )
}
export default RootLayout
{
  /* <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={true}
                  closeOnClick
                  pauseOnHover
                /> */
}
