import { styled } from '@nextui-org/react'

const HEIGHT_NAVBAR = '76px'

/**
 * Sections
 */
export const Header = styled('header', {
  display: 'flex',
  minHeight: `calc(100vh - ${HEIGHT_NAVBAR})`,
  height: 'auto',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem'
})

export const SectionCategory = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  height: 'auto',
  minHeight: '100vh',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6rem',
  '&.reverse-section': {
    flexDirection: 'row-reverse'
  }
})

/**
 * Sections one header
 */

export const LinkSocial = styled('a', {
  color: '$white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.3rem',
  borderRadius: '50%'
})

export const SplashStyle = styled('div', {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '70px',
  height: '98px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '-2rem',
  opacity: 0.7,
  '& > svg': {
    fontSize: '$md'
  }
})

export const ContainerSocialsHome = styled('div', {
  position: 'fixed',
  bottom: '4rem',
  right: '1rem'
})

/**
 * Sections by category
 */
export const CategoryContent = styled('div', {
  width: '100%',
  maxWidth: '300px'
})

const positionsBox = [
  {
    top: '30%',
    left: '0'
  },
  {
    bottom: '0',
    left: '15%'
  },
  {
    top: '0',
    left: '30%'
  },
  {
    top: '40%',
    left: '40%',
    zIndex: 1
  },
  {
    top: '20%',
    right: '0'
  }
]

const stylesBoxChildren = positionsBox.reduce((prev, properties, index) => {
  const className = `& .card-image__card-${index + 1}`
  prev[className] = properties
  return prev
}, {} as Record<string, unknown>)

export const ContentProjects = styled('div', {
  position: 'relative',
  width: '600px',
  height: '800px',

  '& .card-image__card-1, & .card-image__card-2, & .card-image__card-3, & .card-image__card-4, & .card-image__card-5':
    {
      position: 'absolute'
    },

  ...stylesBoxChildren
})
