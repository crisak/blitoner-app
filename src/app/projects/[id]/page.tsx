'use client'

import { Box, Breadcrumbs, BreadcrumbsProps, Text } from '@/components'
import { fetcher } from '@/utils'
import { Button, Container, Row, Spacer } from '@nextui-org/react'
import { Loading } from '@nextui-org/react'
import { useState } from 'react'
import useSWR from 'swr'
import { Project } from '../models'
import { InfoDetail, ContentGallery } from './components'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { HEIGHT_NAVBAR } from '@/styles/variables'

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
  const [isCollapse, setIsCollapse] = useState(false)
  const { data: project, error } = useSWR<Project>(
    `/projects/${params.id}`,
    fetcher
  )

  const paramsBreadcrumbs = {
    links: [
      ...breadcrumbs.links.slice(0, lengthBreadcrumbs - 1),
      {
        label: project?.name || '...'
      }
    ]
  } as BreadcrumbsProps

  const displayContent = () => {
    if (!project) {
      return (
        <Row justify="center">
          <Spacer y={2} />
          <Loading type="points" size="xl" />
        </Row>
      )
    }

    if (error) {
      return (
        <Text blockquote color="error">
          Se presento un error al cargar los datos
        </Text>
      )
    }

    return <Container>{project && <InfoDetail {...project} />}</Container>
  }

  return (
    <>
      <Container>
        <Spacer y={2} />
        <Breadcrumbs {...paramsBreadcrumbs} />
        <Spacer y={2} />
      </Container>

      <Container>
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: `${isCollapse ? '0px' : '400px'} 1fr`,
            gridTemplateRows: '1fr',
            position: 'relative'
          }}
        >
          <Button
            css={{
              left: 'calc(400px - 50px)',
              top: 0,
              position: 'absolute'
            }}
            auto
            flat
            onClick={() => setIsCollapse(!isCollapse)}
          >
            {isCollapse ? <BsArrowRight /> : <BsArrowLeft />}
          </Button>
          <Box
            css={{
              // maxHeight: `calc(100vh - ${HEIGHT_NAVBAR} - 200px)`,
              overflow: 'auto',
              position: 'sticky',
              top: 500
            }}
          >
            {displayContent()}
          </Box>
          <Box>
            <ContentGallery />
          </Box>
        </Box>
      </Container>
      <Spacer y={2} />
    </>
  )
}

export default ProjectIdPage
