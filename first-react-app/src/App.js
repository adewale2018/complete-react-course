import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { firstname: 'Kola', age: 10 },
      { firstname: 'Wale', age: 20 },
      { firstname: 'Carlous', age: 30 },
      { firstname: 'Damilola', age: 40 }
    ],

    otherState: 'Some other values',
  }
 
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { firstname: newName, age: 10 },
        { firstname: 'Adewale', age: 20 },
        { firstname: 'Carlous', age: 30 },
        { firstname: newName, age: 40 }
      ]
    })
  }

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        { firstname: event.target.value, age: 15 },
        { firstname: 'Adewale', age: 25 },
        { firstname: 'Carlous', age: 35 },
        { firstname: event.target.value, age: 45 }
      ]
    })
  }

  render() {
    const buttonStyle = {
      padding: '8px',
      color: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      textAlign: 'center',
      fontFamily: 'monospace',
      outline: 'none'
    }
    return (
      <div className="App">
        <h1>Welcome to the React Course!!!</h1>
        <button  style={buttonStyle} onClick={this.switchNameHandler.bind(this, 'Habeebah!!!')}>SwitchName</button>
        {/* <button onClick={() => this.switchNameHandler('Aasiyah Shittu')}>SwitchName</button> */}
        <Person 
          name={this.state.persons[0].firstname} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].firstname} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Okanlawon')}
          changed={this.changedNameHandler}>My stack is MERN</Person>
        <Person 
          name={this.state.persons[2].firstname} 
          age={this.state.persons[2].age}/>
        <Person 
          name={this.state.persons[3].firstname} 
          age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;

