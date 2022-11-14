import { styled } from '@nextui-org/react'
import Link from 'next/link'

const List = styled('ul', {
  padding: '10px 0px',
  listStyle: 'none',
  margin: '0',
  borderRadius: '$xs',
  '& li': {
    display: 'inline',
    fontSize: '18px'
  },
  '& li+li:before': {
    padding: '8px',
    color: '$primary',
    content: '/'
  },
  '& li a': {
    color: '$primary',
    textDecoration: 'none'
  },
  '& li a:hover': {
    color: '$primarySolidHover',
    textDecoration: 'underline'
  }
})

export type BreadcrumbsProps = {
  links: Array<{ href?: string; label: string }>
}

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  const lastItem = links.length

  return (
    <List className="breadcrumb">
      {links.map(({ href, label }, index) => {
        if (lastItem === index + 1) {
          return <li key={href + label}>{label}</li>
        }

        if (href) {
          return (
            <li key={href + label}>
              <Link href={href}>{label}</Link>
            </li>
          )
        }
        return
      })}
    </List>
  )
}
