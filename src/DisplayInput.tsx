import React from "react"

import Input from "./Input"

interface IProps {
  children: (value: string) => void
}

interface IState {
  inputValue: string
}

export default class DisplayInput extends React.Component<IProps, IState> {
  public state: IState = {
    inputValue: ""
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>): void =>
    this.setState({ inputValue: e.currentTarget.value })

  public render = () => (
    <>
      <Input
        value={this.state.inputValue}
        onChange={this.handleChange}
        name="testInput"
      />
      {this.props.children(this.state.inputValue)}
    </>
  )
}
