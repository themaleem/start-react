import React, { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import UserOutput from "./Person/UserOutput";
import UserInput from "./Person/UserInput";

class App extends Component {
  state={
    name: "maleem",
    age: 24
  };

  // UserNameInputHandler = (newName) => {
  //   this.setState({
  //     name: 'olumide'
  //   });
  // };

  UserNameInputHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };

    return (
      <div className="App">
        <UserOutput name={this.state.name} age={this.state.age} />
        <UserOutput name={this.state.name} age={this.state.age} />
        <UserOutput name={this.state.name} age="35" />
        <UserInput name={this.state.name} change={this.UserNameInputHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
