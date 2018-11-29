import React from "react"

interface IProps {
  name: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({ name, value, onChange }: IProps) => (
  <input onChange={onChange} value={value} name={name} />
)

Input.displayName = "Input"

export default Input
