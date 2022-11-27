'use client'

import useSWR from 'swr'
import { fetcher } from '@/utils'
import type { NextPage } from 'next'

import ListOfProjects from './components/ListOfProjects'
import { Project } from './models'
import { Breadcrumbs, BreadcrumbsProps, LoadingProgress } from '@/components'
import { Container, Spacer } from '@nextui-org/react'

const breadcrumbs = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/proyectos' }
  ]
} as BreadcrumbsProps

type ProjectsPageProps = {
  params?: unknown
  searchParams: {
    category: string
  }
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ searchParams }) => {
  const { data: projects, error } = useSWR<Project[]>(
    `/projects?category=${searchParams.category}`,
    fetcher
  )

  /**
   * todo - Add message of error or a Toast component
   */
  if (error) return <div>failed to load</div>
  if (!projects) return <LoadingProgress />

  /**
   * todo - Add component of filters
   */

  return (
    <>
      <Container>
        <Spacer y={2} />
        <Breadcrumbs {...breadcrumbs} />
        <Spacer y={2} />
      </Container>
      <ListOfProjects projects={projects as Project[]} />
    </>
  )
  /**
   * todo - Add more categories with recommendations
   */
}

export default ProjectsPage
