import React from "react"

import Input from "./Input"

interface IProps {
  render: (value: string) => void
}

interface IState {
  inputValue: string
}

export default class From extends React.Component<IProps, IState> {
  state = {
    inputValue: ""
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void =>
    this.setState({ inputValue: e.currentTarget.value })

  render = () => (
    <>
      <Input
        value={this.state.inputValue}
        onChange={this.handleChange}
        name="testInput"
      />
      {this.props.render(this.state.inputValue)}
    </>
  )
}
