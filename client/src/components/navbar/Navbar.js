import React, { Component } from "react";
import { Navbar, NavItem, Dropdown, Modal } from 'react-materialize'
import API from '../../utils/API';
import styled from 'styled-components';
import "./navbar.css";

const StyledDropdown = styled(Dropdown)`
  &&&&&& {
      position: absolute !important;
      top: 64px !important;
  }
`

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
            header='Sign In'
            trigger={<NavItem> Sign In</NavItem>}>
            <form onSubmit={this.handleSubmit}>
              <h4> Username: </h4>
              <input
                name="username"
                type="text"
                onChange={this.handleChange('username')} 
              >
              </input>
              <br></br>
              <h4> Password: </h4>
              <input
                name="password"
                type="text"
                onChange={this.handleChange('password')} 
              >
              </input>
              <button type="submit" className="formSubmit"> Sign In </button>
            </form>
          </Modal>
        </NavItem>
        <StyledDropdown trigger={
          <NavItem> Username </NavItem>
        }>
          <NavItem> Profile</NavItem>
          <NavItem> Favorites </NavItem>
          <NavItem divider />
          <NavItem> Sign Out</NavItem>
        </StyledDropdown>

      </Navbar>
    );
  }
}