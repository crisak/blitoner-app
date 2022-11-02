import { Card, Spacer, Text } from '@nextui-org/react'
import { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text h2 weight="bold">
        Projects 1
      </Text>

      <Spacer y={3} />
      <Card>
        <Card.Body>
          <Text>Form contact</Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default Contact
