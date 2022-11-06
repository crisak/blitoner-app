'use client'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { Provider } from 'react-redux'
import store from '@/redux/store'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import { Navbar, Footer } from '@/components'

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
      </head>
      <body>
        <NextUIProvider theme={darkTheme}>
          <Provider store={store}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Provider>
        </NextUIProvider>
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
