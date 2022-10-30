import { Text as NText, type TextProps, CSS } from '@nextui-org/react'
import * as React from 'react'

const Text = ({ children, css, ...props }: Partial<TextProps>) => {
  const propsConcat: CSS = css ?? {}

  /**
   * Default style
   */
  propsConcat.color = '$primaryLight'

  if (props.h1) {
    propsConcat.fontFamily = 'spray'
    propsConcat.letterSpacing = '0.4rem'
  }

  if (props.h2) {
    propsConcat.fontFamily = 'network'
    propsConcat.letterSpacing = '.2rem'
  }

  return (
    <NText css={{ ...propsConcat }} {...props}>
      {children}
    </NText>
  )
}

export default Text
