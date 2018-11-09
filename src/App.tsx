import * as React from 'react';
import './App.css';
import Verification from './Verification/Verification';


class App extends React.Component {

  public state = {
    userInput: ''
  }

  public inputChangeHandler = (event: any) => {
    this.setState({
      userInput: event.target.value
    })
  }

  public render(): any{
    return (
      <div className="App">
        <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Verification inputLength={this.state.userInput.length}/>
      </div>
    )
  }
}

export default App;