import { Text as NText, type TextProps, CSS } from '@nextui-org/react'
import * as React from 'react'

const Text = ({ children, css, ...props }: Partial<TextProps>) => {
  const propsConcat: CSS = css ?? {}
  if (props.h1 || props.h2 || props.h3 || props.h4) {
    propsConcat.fontFamily = 'spray'
  }
  return (
    <NText css={{ ...propsConcat }} {...props}>
      {children}
    </NText>
  )
}

export default Text
