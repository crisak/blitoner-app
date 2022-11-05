import { styled } from '@nextui-org/react'

const HEIGHT_NAVBAR = '76px'

/**
 * Sections
 */
export const Header = styled('header', {
  display: 'flex',
  height: `calc(100vh - ${HEIGHT_NAVBAR})`,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem'
})

export const SectionCategory = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem'
})

/**
 * Sections one header
 */

export const LinkSocial = styled('a', {
  color: '$primaryLight',
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
    color: '$primaryLight',
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
export const LeftContent = styled('div', {
  width: '100%',
  maxWidth: '300px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const ContentProjects = styled('div', {
  position: 'relative',
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '2rem'
})
