import Link from 'next/link'
import styled from './Navbar.module.css'

const routes = [
  { label: 'Home', route: '/' },
  { label: 'Projects', route: '/projects' },
  { label: 'Contact', route: '/contact' }
]

export const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <ul>
        {routes.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
