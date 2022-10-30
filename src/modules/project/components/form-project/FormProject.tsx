import { Button, Grid, Input, Row, Spacer, Text } from '@nextui-org/react'
import { createProject, resetProject } from '@/redux/slices'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { projectService } from './../../services'
import { CreateProject } from '../../models'

/**
 * @todo remove React.FC this is deprecated
 */
const FormProject: React.FC = () => {
  const dispatch = useDispatch()

  const onSave = async () => {
    const dataForme = {
      id: Date.now() + '',
      userID: 'crisak-4a2b-aab2-8b902b4ccce1',
      name: 'Cristian',
      date: 'Camilo',
      banner: 'https://google.com',
      description: 'Lorem',
      categoryID: 'Ropa',
      location: {
        position: { latitude: 124145, longitude: 23452345 },
        address: 'Calle 34',
        country: 'Cop',
        state: 'Cundinamarca'
      }
    } as CreateProject
    const response = await projectService.create(dataForme)

    const message = (
      <>
        Project created successfully <strong>{response.id}</strong>!
      </>
    )
    toast(message, {
      type: 'success'
    })

    dispatch(createProject(response))
  }

  const onReset = async () => {
    await dispatch(resetProject())
    toast('Data created successfully!', {
      type: 'success'
    })
  }

  return (
    <>
      <Grid.Container gap={4}>
        <Grid xs={4}>
          <Input
            name="name"
            fullWidth
            clearable
            underlined
            labelPlaceholder="Name"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            name="date"
            fullWidth
            clearable
            underlined
            labelPlaceholder="Date"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            name="description"
            fullWidth
            clearable
            underlined
            labelPlaceholder="Description"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            name="categoryID"
            fullWidth
            clearable
            underlined
            labelPlaceholder="Category"
          />
        </Grid>

        <Grid xs={12}>
          <Text h3>Info location</Text>
        </Grid>

        <Grid xs={4}>
          <Input
            fullWidth
            clearable
            underlined
            name="latitude"
            labelPlaceholder="Latitude"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            fullWidth
            clearable
            underlined
            name="longitude"
            labelPlaceholder="Longitude"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            fullWidth
            clearable
            underlined
            name="address"
            labelPlaceholder="Address"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            fullWidth
            clearable
            underlined
            name="country"
            labelPlaceholder="Country"
          />
        </Grid>
        <Grid xs={4}>
          <Input
            fullWidth
            clearable
            underlined
            name="state"
            labelPlaceholder="State"
          />
        </Grid>
      </Grid.Container>
      <Spacer y={2} />

      <Grid.Container gap={4}>
        <Grid xs={12}>
          <Row justify="flex-end">
            <Button size="sm" light onPress={onReset}>
              Cancel
            </Button>
            <Button size="sm" onPress={onSave}>
              Save
            </Button>
          </Row>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default FormProject
