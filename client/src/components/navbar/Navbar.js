import React, { Component } from "react";
import { Navbar, NavItem, Modal } from 'react-materialize'
import API from '../../utils/API';
import "./navbar.css";

// Need to add conditional...if user is logged in load dropdownB, if not, load A
export default class NavBar extends Component {
  state = {}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    API.auth({
      username: this.state.username,
      password: this.state.password
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <Navbar brand='logo' right>
        <NavItem>
          <Modal
            header='Log In'
            trigger={<div>Log In</div>}>
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
              <button type="submit" className="formSubmit"> Log In </button>
            </form>
          </Modal>
        </NavItem>
        <NavItem><div> Username</div></NavItem>
        <NavItem><div> Profile </div></NavItem>
        <NavItem><div> Sign Out </div> </NavItem>
      </Navbar>
    );
  }
}