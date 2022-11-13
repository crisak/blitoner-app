'use client'

import { Breadcrumbs, BreadcrumbsProps } from '@/components'
import { fetcher } from '@/utils'
import { Container, Spacer } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import { Project } from '../models'
import DetailProject from './components/DetailProject'

const breadcrumbs = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: '...' }
  ]
} as BreadcrumbsProps

const lengthBreadcrumbs = breadcrumbs.links.length

type ProjectIdPage = {
  params: { id: string }
}

const ProjectIdPage = ({ params }: ProjectIdPage) => {
  console.log('any->', params.id)

  const { data: project } = useSWR<Project>(`/projects/${params.id}`, fetcher)

  const paramsBreadcrumbs = {
    links: [
      ...breadcrumbs.links.slice(0, lengthBreadcrumbs - 1),
      {
        label: project?.name || '...'
      }
    ]
  } as BreadcrumbsProps

  return (
    <>
      <Container>
        <Spacer y={2} />
        <Breadcrumbs {...paramsBreadcrumbs} />
        <Spacer y={2} />
      </Container>
      {project && <DetailProject {...project} />}
    </>
  )
}

export default ProjectIdPage
