import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'
import { awsExports } from '../config/env'
import { NextUIProvider, createTheme, Container } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Navbar } from '@/components'
import { ToastContainer } from 'react-toastify'

Amplify.configure(awsExports)

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark'
})

function App({ Component, pageProps }: AppProps) {
  return (
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
          <Container css={{ py: '$20' }}>
            <main>
              <Component {...pageProps} />
            </main>
          </Container>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover
          />
        </NextUIProvider>
      </NextThemesProvider>
    </Provider>
  )
}

export default App
