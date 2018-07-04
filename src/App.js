import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './User/User.css';
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
      <div className="App" className="div">
      <UserInput value={this.state.username} changed={this.usernameChangeHandler.bind(this)}/>
      <UserOutput username = {this.state.username}/>
      <UserOutput username = {this.state.username}/>
      <UserOutput username = {this.state.username}/>
      </div>
    );
  }
}

export default App;
