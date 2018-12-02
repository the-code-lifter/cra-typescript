import React from 'react'

interface Props {
  text: string
}

const Button: React.SFC<Props> = ({ text, ...props }: Props) => (
  <button {...props}>{text}</button>
)

Button.displayName = 'Button'

export default Button
