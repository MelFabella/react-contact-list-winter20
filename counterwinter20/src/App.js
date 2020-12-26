import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './components/counters/Counter';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { counterValue: 0 }
  //   this.inc = this.inc.bind(this)
  // } OLD SYNTAX
  // state = { counterValue: 0 } NEW SYNTAX
  
  // inc() {
  //   this.state.counterValue++
  // } OLD SYNTAX
  
  // inc = () => {
  //   this.setState({ counterValue: this.state.counterValue + 1 })
  // } NEW SYNTAX

  // dec = () => {
  //   this.setState({ counterValue: this.state.counterValue - 1 })
  // }

  // dec = () => {
  //   this.setState( (state) => {
  //     return { counterValue: state.counterValue -1 }
  //   })
  // } DRY SYNTAX

  // dec = () => {
  //   const { counterValue } = this.state
  //   this.setState({ counterValue: counterValue -1 })
  // } DRY SYNTAX HENRY'S PREP

  render() {
    return (
      <>
        <h1>Counter Example</h1>
        {/* <p>
          {this.state.counterValue}
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}
        <Counter colorName="red" />
        <Counter colorName="purple" />
        <Counter colorName="green" />
      </>
    )
  }
}

export default App;