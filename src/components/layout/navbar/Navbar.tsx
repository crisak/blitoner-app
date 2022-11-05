// import { Navbar as NavbarStyled, NavLink } from '@/styled-components'
import { Navbar, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'
// import { Link } from '@nextui-org/react'

const collapseItems = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Projects',
    route: '/projects'
  },
  {
    label: 'Contact',
    route: '/contact'
  },
  {
    label: 'Login',
    route: '/login'
  }
]

const NavbarComponent = () => {
  const { isDark } = useTheme()
  return (
    <Navbar isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle css={{ mr: '$8' }} aria-label="toggle navigation" />
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
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </Navbar.Content>
      <Navbar.Content>
        <Link color="inherit" href="/login">
          Login
        </Link>
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
