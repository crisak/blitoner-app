import { styled } from '@nextui-org/react'
import { variables } from '@/styles'

export const Navbar = styled('ul', {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: 'rgb(51 51 51 / 70%)',
  height: variables.HEIGHT_NAVBAR
})

export const NavLink = styled('li', {
  float: 'left',
  margin: 0,
  padding: 0,
  '& > a': {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    '&:hover:not(.active)': {
      backgroundColor: '#111'
    },
    '&.active': {
      color: 'black',
      backgroundColor: '#f3f3f3'
    }
  }
})
