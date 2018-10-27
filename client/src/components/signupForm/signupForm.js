import React, { Component } from "react";
import { Modal, Button } from 'react-materialize'
import API from '../../utils/API';
import "./signupForm.css"

export default class signupForm extends Component {
  state = {}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    API.register({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="signupForm">
      < Modal
        header='Sign Up'
        trigger={<Button >Sign Up</Button >}>
        <form onSubmit={this.handleSubmit}>
          <h4> Username: </h4>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange('username')}
          >
          </input>
          <br></br>
          <h4> Password: </h4>
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange('password')}
          >
          </input>
          <button type="submit" className="formSubmit"> Sign Up </button>
        </form>
      </Modal >
      </div>
    )
  }
};