'use client'

import { Text } from '@/components'
import { loadProjects } from '@/redux/slices'
import { Container, Grid, Spacer } from '@nextui-org/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardProject from './CardProject'
import { Project } from '../models'
import { BsArrowClockwise } from 'react-icons/bs'
import Link from 'next/link'

type ListOfProjectsProps = { projects: Project[] }

const ListOfProjects = ({ projects }: ListOfProjectsProps) => {
  const dispatch = useDispatch()

  console.log('projects->', projects)

  useEffect(() => {
    dispatch(loadProjects(projects))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects])

  return (
    <Container>
      <Spacer y={2} />
      <Text h2 weight="bold">
        Proyectos
        <Link href="/projects" style={{ float: 'right' }}>
          <BsArrowClockwise size={25} />
        </Link>
      </Text>

      <Spacer y={3} />
      <Grid.Container gap={3} justify="center">
        {projects.map((project) => (
          <Grid key={project.id} xs={12} md={4}>
            <CardProject {...project} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}

export default ListOfProjects
