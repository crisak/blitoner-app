import {
  Card,
  Grid,
  Text,
  Divider,
  Button,
  Row,
  Input,
  Spacer,
  useInput
} from "@nextui-org/react"
import { Auth } from "aws-amplify";
import { NextPage } from "next"
import { useState } from "react";
import { useWindow } from "../../common/hooks";
import { authService } from "../../common/services";
import { Nullable } from "../../common/types";

const Login: NextPage = () => {
  const { isSSR, windowObj } = useWindow()

  const { value: username, reset: resetUsername, bindings: bindingsUsername } = useInput("cristian.agency");
  const { value: password, reset: resetPassword, bindings: bindingsPassword } = useInput("Temporal01");

  const [response, setResponse] = useState<Nullable<authService.AuthCognito>>(() => {
    if (isSSR) {
      return null
    }
    return authService.get(windowObj as Window)
  })

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (isSSR) {
      return false
    }
    return authService.isAuthenticated(windowObj as Window)
  })

  const logout = async () => {
    try {
      if (isSSR) return
      await Auth.signOut()
      authService.remove(windowObj as Window)
      setIsAuthenticated(false)
      setResponse(null)
    } catch (error) {
      console.log('error', error)
      alert('Se presento un error' + error)
    }
  }

  const login = async () => {
    try {
      if (isSSR) return
      const responseData = await Auth.signIn(username, password)
      setResponse(responseData)
      authService.save(windowObj as Window, responseData)

    } catch (error) {
      authService.remove(windowObj as Window)
      console.log('error', error)
      alert('Se presento un error' + error)
    } finally {
      setIsAuthenticated(authService.isAuthenticated(windowObj as Window))
    }
  }

  return (
    <Grid.Container gap={2} css={{ mt: '$20' }}>
      <Grid sm={12}>
        <Card css={{ mw: "530px", mt: '$20', margin: 'auto', overflow: 'auto' }} bordered>

          <strong>Agency user</strong>
          <code>cristian.agency</code>
          <code>Temporal01</code>
          <hr />
          <strong>Fulfillment user</strong>
          <code>cristian.romero.com</code>
          <code>Temporal01</code>
        </Card>
      </Grid>
      <Grid sm={12}>
        <Card css={{ mw: "530px", margin: 'auto' }}>
          <Card.Header>
            <Text b>Login</Text>
          </Card.Header>
          <Divider />
          <Card.Body css={{ py: "$10" }}>
            <Input
              {...bindingsUsername}
              bordered
              clearable
              onClearClick={resetUsername}
              type='text'
              label="Username"
              aria-label="Username"
              placeholder="Username"
            />
            <Spacer y={2.5} />
            <Input
              {...bindingsPassword}
              clearable
              bordered
              type='text'
              onClearClick={resetPassword}
              placeholder="Password"
              label="Password"
              aria-label="Password"
            />
          </Card.Body>
          <Divider />
          <Card.Footer>
            <Row justify="flex-end">
              {!isAuthenticated && <Button size="sm" onPress={login}>Login</Button>}
              {isAuthenticated && <Button size="sm" onPress={logout} color='warning'>Logout</Button>}
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      {
        response && (
          <Grid sm={12}>
            <Card css={{ mw: "800px", mt: '$20', margin: 'auto', overflow: 'auto' }} bordered>

              <pre><code>{JSON.stringify(response, null, 2)}</code></pre>

            </Card>
          </Grid>
        )
      }
    </Grid.Container>
  );
}
export default Login