import { Button, Grid, Input, Row, Spacer, Text } from '@nextui-org/react'
import { createProject } from '@redux/slices'
import { useDispatch } from 'react-redux'
// import { toast } from 'react-toastify'

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
          id: '',
          name: '',
          date: '',
          banner: '',
          description: '',
          categoryID: '',
          location: {
            position: { latitude: 0, longitude: 0 },
            address: '',
            country: '',
            state: ''
          }
        })
      )
    )
    // toast('Data created successfully!')
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
            <Button size="sm" light>
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
