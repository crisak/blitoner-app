import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { Navbar } from './components'

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <head>
        <title>Blitoner - Blog</title>
      </head>
      <body>
        <Navbar />
        <main
          style={{
            maxWidth: '1000px',
            width: '90%',
            margin: '0 auto'
          }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
export default RootLayout
