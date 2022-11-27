import { Box, Text } from '@/components'
import { Button, Grid, Input, Textarea } from '@nextui-org/react'
import Fade from 'react-reveal/Fade'

const Form = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submit')
  }
  return (
    <Box css={{ p: '$15' }}>
      <form onSubmit={handleSubmit}>
        <Fade right>
          <Grid.Container gap={4}>
            <Grid xs={12}>
              <Fade bottom>
                <Text h2>Escríbeme</Text>
              </Fade>
            </Grid>
            <Grid xs={12}>
              <Input underlined labelPlaceholder="Nombre" fullWidth />
            </Grid>
            <Grid xs={12}>
              <Input
                type="email"
                underlined
                labelPlaceholder="Correo"
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                underlined
                labelPlaceholder="Mensaje"
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid>
              <Fade bottom>
                <Button
                  css={{
                    width: '100%'
                  }}
                >
                  Enviar
                </Button>
              </Fade>
            </Grid>
          </Grid.Container>
        </Fade>
      </form>
    </Box>
  )
}

export default Form
