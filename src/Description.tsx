import React from 'react'

interface IProps {
  countBy?: number
}

interface IState {
  count: number
}

const increaseCount = ({ count }: IState, increaseCountBy: number) =>
  count + increaseCountBy

class Description extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
  }

  public state: IState = {
    count: 0,
  }

  public increase = () => {
    const countBy: number = this.props.countBy!

    this.setState({
      count: increaseCount(this.state, countBy),
    } as IState)
  }

  public render() {
    return (
      <div>
        <p>My favorite number is {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    )
  }
}

export default Description
