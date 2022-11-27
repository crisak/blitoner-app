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

  useEffect(() => {
    dispatch(loadProjects(projects))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects])

  return (
    <Container>
      <Text h2 weight="bold">
        Proyectos
        <Link href="/proyectos" style={{ float: 'right' }}>
          <BsArrowClockwise size={25} />
        </Link>
      </Text>

      <Spacer y={1} />
      <Grid.Container gap={3} justify="center">
        {projects.slice(0, 10).map((project) => (
          <Grid xs={12} sm={6} md={4} key={project.id} justify="center">
            <Link href={`/proyectos/${project.id}`}>
              {/* <Link
              href={{
                pathname: '/proyectos/[id]',
                query: { id: project.id }
              }}
            > */}
              <CardProject {...project} />
            </Link>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}

export default ListOfProjects
