import '../styles/globals.css'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'
import { awsExports } from './../src/config/env'

Amplify.configure(awsExports)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
