'use client'

import useSWR from 'swr'
import { fetcher } from '@/utils'

import ListOfProjects from './components/ListOfProjects'
import { Project } from './models'
import { useSearchParams } from 'next/navigation'
import { LoadingProgress } from '@/components'

const ProjectsPage = () => {
  const params = useSearchParams()

  const categoryFilter = params.get('category')

  const { data: projects, error } = useSWR<Project[]>(
    `/projects?category=${categoryFilter}`,
    fetcher
  )

  /**
   * todo - Add message of error or a Toast component
   */
  if (error) return <div>failed to load</div>
  if (!projects) return <LoadingProgress />

  return <ListOfProjects projects={projects as Project[]} />
}

export default ProjectsPage
