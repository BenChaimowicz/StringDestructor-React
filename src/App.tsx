import * as React from 'react';
import './App.css';
import Char from './Char/Char';
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

  public deleteCharHandler = (index:number) => {
    const text:string[] = this.state.userInput.split('');
    text.splice(index, 1);
    const newText: string = text.join('');
    this.setState({userInput: newText})
  }

  public render(): any{
   
    const charList: any = this.state.userInput.split('').map((ch,index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index) }/>;
    })

    return (
      <div className="App">
        <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Verification inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}

export default App;