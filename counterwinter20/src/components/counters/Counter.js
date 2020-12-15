import { Component } from 'react';
class Counter extends Component {
  state = { counterValue: 0 }
  inc = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }
  dec = () => {
    this.setState({ counterValue: this.state.counterValue - 1 })
  }
  render() {
    return (
      <>
        <h1 style={{ backgroundColor: this.props.colorName }}
        >{this.props.colorName} Counter</h1>
        <p>
          {this.state.counterValue}
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    )
  }
}
export default Counter;