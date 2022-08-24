import { Navbar as NavbarStyled, NavLink } from '@styled-components'
import Link from 'next/link'

const Navbar = () => {
  return (
    <NavbarStyled role="navigation">
      <NavLink>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link href="/projects">Projects</Link>
      </NavLink>
    </NavbarStyled>
  )
}

export default Navbar
