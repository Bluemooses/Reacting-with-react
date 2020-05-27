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
    monsters :[ //The is the string that I just input
          {
            name: 'Lochness',
            id: 'asc1'
          },
          {
            name: 'Wolfboy',
            id: 'asc2'
          },
          {
            name: 'Zombie',
            id: 'asw1'
          }  
        ]
      };
  };
  render() {//anything inside here is jsx code syntax.  {} Notation.  
return(
    <div className='App'>
      {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>

      ))}



    </div>
 
  );
}         }
export default App;//Plug-and-play for virtual DOM.