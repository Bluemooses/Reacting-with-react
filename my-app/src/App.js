import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';


//uses class to allow us to access a state
class App extends Component {
  constructor(){
    super(); //calls constructor on the classApp
  this.state = {
    string: 'Hello gorgeous'//The is the string that I just input
  };
  };
  render() {//render returns any HTML you want!  
    return(
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'You look fear in the eye and approach it openly' })}>Text Changer</button>
        </header>
        </div>
    )}}
export default App;