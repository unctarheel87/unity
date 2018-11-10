/* global $ */
import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button, Input } from 'react-materialize'
import { User, Advisor } from '../../utils/Auth';
import API from '../../utils/API'
import "./signupForm.css"

const StyledButton = styled(Button)`
    &{
      margin-left: 20px;
      border: 1px solid #008000;
      color: #fff;
      background-color: #008000;
      border-radius: 5px;
    }
    &:hover{
      background: #025202 !important;
      color: #fff !important;
    }
`

export default class signupForm extends Component {
  state = {
    username: '',
    password: '',
    chosenAdvisor: '',
    advisors: [],
    role: 'user',
  }
  componentDidMount() {
    this.getAdvisors();
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
        password: this.state.password,
        advisor: this.state.chosenAdvisor
      })
        .then(response => {
          console.log(response)
          $(".modal open").modal('close')
        })
        .catch(err => console.log(err))
    } else if (this.state.role === 'advisor') {
      Advisor.register({
        username: this.state.username,
        password: this.state.password,
      })
        .then(response => {
          console.log(response)
          $(".open").modal('close')
        })
        .catch(err => console.log(err))
    } 
  }
  handleRoleChange = event => {
    this.setState({ role: event.target.value })
  }
  getAdvisors = () => {
    API.getAdvisors()
      .then(response => this.setState({advisors: response.data}))
      .catch(err => console.log(err))
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
              required 
              type='select' 
              label="Sign up as:" 
              onChange={this.handleRoleChange}
              value={this.state.role}
              className="sign-up-as"
            >
              <option value='user'>User</option>
              <option value='advisor'>Advisor</option>
            </Input>
            {this.state.role === "user" && this.state.advisors &&
              <Input s={6} 
                required 
                type='select' 
                label="Choose your advisor"
                value={this.state.chosenAdvisor}
                onChange={this.handleChange('chosenAdvisor')} 
              >
              <option></option>
              {this.state.advisors.map(advisor => (
                <option value={advisor._id}>{advisor.username}</option>
              ))}
              </Input>
            }
            <Input
              required
              label="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <Input
              required
              label="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <button type="submit" className="formSubmit waves-effect waves-light btn"> Sign Up </button>
          </form>
        </Modal>
      </div>
    )
  }
};