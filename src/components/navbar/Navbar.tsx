import { AppStore } from '@/redux/store'
import { Navbar as NavbarStyled, NavLink } from '@/styled-components'
import { Container } from '@nextui-org/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

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
        {project.name && (
          <NavLink css={{ float: 'right' }}>
            <Link href="/projects">{project.name}</Link>
          </NavLink>
        )}
      </Container>
    </NavbarStyled>
  )
}

export default Navbar
