import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {
  state = {
    username:"akshay"
  }

  usernameChangeHandler = (event) => {
    this.setState({username:event.target.value})
    console.log("state.username "+this.state.username);
  }

  render() {
    return (
      <div className="App">
      <UserInput value={this.state.username} changed={this.usernameChangeHandler.bind(this)}/>
      <UserOutput username = {this.state.username}/>
      <UserOutput/>
      <UserOutput/>
      </div>
    );
  }
}

export default App;
