'use client'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { Navbar, Footer } from '@/components'

const lightTheme = createTheme({
  type: 'light'
})

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
        <Provider store={store}>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className
            }}
          >
            <NextUIProvider>
              <Navbar />
              <main>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={true}
                  closeOnClick
                  pauseOnHover
                />
                {children}
              </main>
              <Footer />
            </NextUIProvider>
          </NextThemesProvider>
        </Provider>
      </body>
    </html>
  )
}
export default RootLayout
