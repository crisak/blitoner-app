import { AppStore } from '@/redux/store'
import { Navbar as NavbarStyled, NavLink } from '@/styled-components'
import { Container } from '@nextui-org/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

/**
 * @todo Aligns items vertical (ul > li) into navbar
 */
const Navbar = () => {
  const project = useSelector((state: AppStore) => state.project)
  return (
    <NavbarStyled role="navigation">
      <Container>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/projects">Projects</Link>
        </NavLink>
        <NavLink>
          <Link href="/contact">Contact</Link>
        </NavLink>
      </Container>
    </NavbarStyled>
  )
}

export default Navbar
