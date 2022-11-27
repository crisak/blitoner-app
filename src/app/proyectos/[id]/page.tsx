'use client'

import { Box, Breadcrumbs, BreadcrumbsProps, Text } from '@/components'
// import { fetcher } from '@/utils'
import { Button, Container, Row, Spacer } from '@nextui-org/react'
import { Loading } from '@nextui-org/react'
import { useState } from 'react'
// import useSWR from 'swr'
// import { Project } from '../models'
import { InfoDetail, ContentGallery } from './components'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import { SizeMe } from 'react-sizeme'
import DB from '@/utils/db'

const WIDTH_ASIDE = '300px'

const breadcrumbs = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: '...' }
  ]
} as BreadcrumbsProps

const lengthBreadcrumbs = breadcrumbs.links.length

type ProjectIdPage = {
  params: { id: string }
}

const ProjectIdPage = ({ params }: ProjectIdPage) => {
  const [isCollapse, setIsCollapse] = useState(false)

  const error = null

  // const { data: project, error } = useSWR<Project>(
  //   `/projects/${params.id}`,
  //   fetcher
  // )

  const project = DB.projects.find(({ id }) => id === params.id)

  const paramsBreadcrumbs = {
    links: [
      ...breadcrumbs.links.slice(0, lengthBreadcrumbs - 1),
      {
        label: project?.name || '...'
      }
    ]
  } as BreadcrumbsProps

  const displayAside = () => {
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
        <Box>
          <Text blockquote color="error">
            Se presento un error al cargar los datos
          </Text>
        </Box>
      )
    }

    return project && <InfoDetail {...project} />
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
            transition: 'all .3s ease-in-out',
            gridTemplateColumns: `${isCollapse ? '0' : WIDTH_ASIDE} 1fr`,
            gridTemplateRows: '1fr',
            gap: '$10'
          }}
        >
          <Box
            css={{
              overflow: isCollapse ? 'hidden' : 'visible',
              position: 'relative'
            }}
          >
            <Box css={{ height: 0 }} />
            <SizeMe monitorHeight>
              {({ size }) => {
                let win = null
                if (typeof window !== 'undefined') {
                  win = window
                }
                const screenValue =
                  win !== undefined && win?.screen !== undefined
                    ? screen?.height || 0
                    : 0

                const valueSize = size?.height || 0

                const heightCalculate = valueSize === Infinity ? 0 : valueSize

                const topSticky = screenValue - heightCalculate

                const MARGIN_BOTTOM_ASIDE = '4rem'

                return (
                  <Box
                    css={{
                      position: 'sticky',
                      top: `calc(${topSticky}px - ${HEIGHT_NAVBAR} - ${MARGIN_BOTTOM_ASIDE})`
                    }}
                  >
                    {!isCollapse && (
                      <Button
                        css={{
                          left: `calc(${WIDTH_ASIDE} - 50px)`,
                          position: 'absolute',
                          zIndex: 20
                        }}
                        auto
                        flat
                        onClick={() => setIsCollapse(!isCollapse)}
                      >
                        <BsChevronDoubleLeft />
                      </Button>
                    )}

                    {displayAside()}
                  </Box>
                )
              }}
            </SizeMe>
          </Box>
          <Box
            css={{
              position: 'relative'
            }}
          >
            {isCollapse && (
              <Button
                css={{
                  ml: '1rem',
                  top: `calc(${HEIGHT_NAVBAR} + 1rem)`,
                  position: 'sticky',
                  zIndex: 20
                }}
                auto
                flat
                onClick={() => setIsCollapse(!isCollapse)}
              >
                <BsChevronDoubleRight />
              </Button>
            )}

            <ContentGallery projectId={params.id} />
          </Box>
        </Box>
      </Container>
      <Spacer y={2} />
    </>
  )
}

export default ProjectIdPage
