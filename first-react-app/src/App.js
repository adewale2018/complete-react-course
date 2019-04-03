import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf001', firstname: 'Kola', age: 10 },
      { id: 'asdf002', firstname: 'Wale', age: 20 },
      { id: 'asdf003', firstname: 'Carlous', age: 30 },
      { id: 'asdf004', firstname: 'Damilola', age: 40 }
    ],

    otherState: 'Some other values',
    showPersons: false
  }
 
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { firstname: newName, age: 10 },
  //       { firstname: 'Adewale', age: 20 },
  //       { firstname: 'Carlous', age: 30 },
  //       { firstname: newName, age: 40 }
  //     ]
  //   })
  // }

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; 

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});

    // this.setState({
    //   persons: [
    //     { firstname: event.target.value, age: 15 },
    //     { firstname: 'Adewale', age: 25 },
    //     { firstname: 'Carlous', age: 35 },
    //     { firstname: event.target.value, age: 45 }
    //   ]
    // })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
}

  render() {
    const buttonStyle = {
      padding: '8px',
      color: '#1C89BF',
      border: '1px solid #FF6663 ',
      borderRadius: '10px',
      textAlign: 'center',
      fontFamily: 'monospace',
      outline: 'none',
      backgroundColor: 'white',
      font: 'inherit',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.firstname} 
              age={person.age}
              click={() => this.deletePersonHandler (index)}
              key={person.id}
              changed={(event) => this.changedNameHandler (event, person.id)}/>
          })}
        </div>

        // <div>
        //   <Person 
        //     name={this.state.persons[0].firstname} 
        //     age={this.state.persons[0].age}/>
        //   <Person 
        //     name={this.state.persons[1].firstname} 
        //     age={this.state.persons[1].age}
        //     click={this.switchNameHandler.bind(this, 'Okanlawon')}
        //     changed={this.changedNameHandler}>My stack is MERN</Person>
        //   <Person 
        //     name={this.state.persons[2].firstname} 
        //     age={this.state.persons[2].age}/>
        //   <Person 
        //     name={this.state.persons[3].firstname} 
        //     age={this.state.persons[3].age}/>
        // </div>
      );
      
    }
    return (
      <div className="App">
        <h1>Welcome to the React Course!!!</h1>
        <button  
          style={buttonStyle} 
          onClick={this.togglePersonsHandler}>SwitchName</button>
        {persons}
        {/* <button  style={buttonStyle} onClick={this.switchNameHandler.bind(this, 'Habeebah!!!')}>SwitchName</button> */}
        {/* <button onClick={() => this.switchNameHandler('Aasiyah Shittu')}>SwitchName</button> */}
      </div>
    ); 
  }
}

export default App;

