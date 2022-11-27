import { Box, Text } from '@/components'
import { formatDate } from '@/utils'
import { Badge, Spacer } from '@nextui-org/react'
import { Project } from '../../models'
import ThumbnailMap from './ThumbnailMap'

const InfoDetail = (project: Project) => {
  const displayTags = () => {
    if (!project.tags) {
      return <Text css={{ opacity: '.6' }}>Sin tags</Text>
    }

    const tags = project.tags.split(',').filter((tag) => tag.trim())

    return (
      <Box css={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        {tags.map((value) => (
          <Badge key={value} size="md">
            {value}
          </Badge>
        ))}
      </Box>
    )
  }

  const displayCollaborators = () => {
    let collaborators: Project['collaborators'] = []
    if (!project?.collaborators || project?.collaborators?.length === 0) {
      // return null
      collaborators = [
        {
          username: 'Sonrie',
          name: 'Juan David',
          email: '',
          photoUrl:
            'https://gravatar.com/avatar/fea6aaf18becc6d8d2ba637609fcda0a?s=400&d=robohash&r=x',
          socials: [
            {
              username: '@sorie',
              id: 1,
              type: 'INSTAGRAM',
              url: 'https://www.instagram.com/zurullaco.de.vaca/'
            }
          ]
        }
      ]
    }

    return (
      <>
        <Text h3>Colaboradores</Text>

        <Box css={{ display: 'flex', gap: '0.8rem', flexDirection: 'column' }}>
          {collaborators.map(({ username }) => (
            <Text
              key={username}
              css={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'all .3s',
                '&:hover': { opacity: '.7' }
              }}
            >
              {username}
            </Text>
          ))}
        </Box>

        <Spacer y={2} />
      </>
    )
  }

  const displayPosition = () => {
    if (
      !project.location?.position?.latitude &&
      !project.location?.position?.longitude
    ) {
      return <Text css={{ opacity: '.6' }}>Sin ubicación</Text>
    }

    const position = {
      lat: project.location.position.latitude,
      lng: project.location.position.longitude
    }

    return <ThumbnailMap position={position} />
  }

  return (
    <>
      <Text h2>{project.name}</Text>
      <Spacer y={1} />

      <Text>{project.description}</Text>
      <Spacer y={2} />

      <Text h3>Tags</Text>
      {displayTags()}
      <Spacer y={2} />

      {displayCollaborators()}

      <Text h3>Detalles</Text>
      <Box>
        <Text b>Fecha: </Text>
        <Text span weight="light">
          {formatDate(project.date)}
        </Text>
      </Box>
      <Box>
        <Text b>Categoría: </Text>
        <Text span weight="light">
          {project.nameCategory || 'Todo remove'}
        </Text>
      </Box>
      <Spacer y={2} />

      <Text h3>Ubicación</Text>
      {displayPosition()}
      <Spacer y={2} />
    </>
  )
}

export default InfoDetail
