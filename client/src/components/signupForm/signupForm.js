import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button, Input } from 'react-materialize'
import { User, Advisor } from '../../utils/Auth';
import "./signupForm.css"

const StyledButton = styled(Button)`
    &{
      margin-left: 20px;
      border: 1px solid #008000;
      color: #008000;
      background-color: #fff;
      border-radius: 5px;
    }
    &:hover{
      background: #008000 !important;
      color: #fff !important;
    }
`

export default class signupForm extends Component {
  state = {
    username: '',
    password: '',
    role: 'user',
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if(this.state.role === 'user') {
      User.register({
        username: this.state.username,
        password: this.state.password
      })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    } else if (this.state.role === 'advisor') {
      Advisor.register({
        username: this.state.username,
        password: this.state.password
      })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    } 
  }
  handleRoleChange = event => {
    this.setState({ role: event.target.value })
  }
  render() {
    return (
      <div className="signupForm">
        <Modal
          header='Sign Up'
          trigger={<StyledButton >Sign Up Today</StyledButton>}
        >
          <form onSubmit={this.handleSubmit}>
            <Input s={6} 
              type='select' 
              label="Sign up as:" 
              onChange={this.handleRoleChange}
              value={this.state.role}
              className="sign-up-as"
            >
              <option value='user'>User</option>
              <option value='advisor'>Advisor</option>
            </Input>
            <div className="input-field">
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
              <label for="username">username</label>
            </div>
            <div className="input-field">
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
              <label for="password">password</label>
            </div>
            <button type="submit" className="formSubmit waves-effect waves-light btn"> Sign Up </button>
          </form>
        </Modal>
      </div>
    )
  }
};