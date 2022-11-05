'use client'

import { Grid, Progress } from '@nextui-org/react'

const LoadingPage = () => {
  return (
    <Grid.Container xs={12}>
      <Grid>
        <Progress
          indeterminated
          size="xs"
          striped
          shadow
          value={50}
          color="primary"
          status="primary"
        />
      </Grid>
    </Grid.Container>
  )
}

export default LoadingPage
