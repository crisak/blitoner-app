import { Grid, Navbar, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'

const collapseItems = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Proyectos',
    route: '/proyectos'
  },
  {
    label: 'Contacto',
    route: '/contacto'
  }
  // {
  //   label: 'Login',
  //   route: '/login'
  // }
]

const NavbarComponent = () => {
  const { isDark } = useTheme()
  return (
    <Navbar
      css={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'saturate(180%) blur(10px)',
        '& .nextui-navbar-container': {
          background: 'none',
          backdropFilter: 'none',
          borderBottom: '0px'
        }
      }}
      isBordered={isDark}
      variant="sticky"
    >
      <Navbar.Brand>
        <Link
          href={{
            pathname: '/'
          }}
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Image
            src={BlitoFrontPage}
            width={40}
            height={40}
            alt="Logo de portada"
            color="red"
          />
          <Text b color="inherit" hideIn="xs" css={{ ml: '$8' }}>
            Blito
          </Text>
        </Link>
        <Grid sm={0}>
          <Navbar.Toggle css={{ mr: '$8' }} aria-label="toggle navigation" />
        </Grid>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Link href="/">Home</Link>
        <Link
          href={{
            pathname: '/proyectos',
            query: { category: 'graffiti' }
          }}
        >
          Proyectos
        </Link>
        <Link href="/contacto">Contacto</Link>
      </Navbar.Content>
      <Navbar.Content>
        {/* <Link color="inherit" href="/login">
          Login
        </Link> */}
      </Navbar.Content>

      <Navbar.Collapse>
        {collapseItems.map(({ label, route }) => (
          <Navbar.CollapseItem key={label}>
            <Link href={route}>{label}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
