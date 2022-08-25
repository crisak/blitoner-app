import { Button, Grid, Input, Row, Spacer, Text } from '@nextui-org/react'
import { createProject, resetProject } from '@/redux/slices'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const fetchData = (dispatch: any) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      dispatch()
      resolve()
    }, 2000)
  })
}

const FormProject: React.FC = () => {
  const dispatch = useDispatch()

  const onSave = async () => {
    await fetchData(() =>
      dispatch(
        createProject({
          id: Date.now() + '',
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
        })
      )
    )
    toast('Data created successfully!', {
      type: 'success'
    })
  }

  const onReset = async () => {
    await fetchData(() => dispatch(resetProject()))
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
