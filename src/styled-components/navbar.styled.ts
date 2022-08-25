// import styleda from 'styled-components'
import { styled } from '@nextui-org/react'

export const Navbar = styled('ul', {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: 'rgb(51 51 51 / 45%)'
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

// export const Navbar = styled.ul`
//   listStyleType: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   backgroundColor: #333;
// `

// export const NavLink = styled.li`
//   float: left;
//   margin: 0;
//   padding: 0;

//   & > a {
//     display: block;
//     color: white;
//     textAlign: center;
//     padding: 14px 16px;
//     textDecoration: none;

//     &:hover:not(.active) {
//       backgroundColor: #111;
//     }
//     &.active {
//       color: black;
//       backgroundColor: #f3f3f3;
//     }
//   }
// `
