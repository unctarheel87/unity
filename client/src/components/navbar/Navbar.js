import React from "react";
import { Link } from "react-router-dom"
import { Navbar, NavItem, Input, Modal } from 'react-materialize'
import "./navbar.css";

// Need to add conditional...if user is logged in load dropdownB, if not, load A
export default class NavBar extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleLogin({
      username: this.state.username,
      password: this.state.password
    })
  }
  render() {
    return (
      <Navbar className="nav-bar" brand='Unity' right>
        <NavItem
          onClick={() => this.props.handlePageChange("Search")}
          className={this.props.currentPage === "Search" ? "active" : "deactive"}>
          <Link to="/search"> Search </Link>
        </NavItem>
        {!this.props.userExists ? (
          // <NavItem>
          //   <Modal
          //     header='Modal Header'
          //     trigger={<Button>MODAL</Button>}>
          //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          //   </Modal>
          // </NavItem>
          <NavItem>
            <Modal
              header='Log In'
              trigger={<div> Log In</div>}>
              <form onSubmit={this.handleSubmit}>
                <Input s={6} 
                  type='select' 
                  label="Choose your role" 
                  onChange={this.props.handleRoleChange}
                  value={this.props.role}
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
                <button type="submit" className="formSubmit waves-effect waves-light btn"> Log In </button>
              </form>
            </Modal>
          </NavItem>
        ) : (
            <span>
              <NavItem><div> Hello, Username</div></NavItem>
              <NavItem
                onClick={() => this.props.handlePageChange("Profile")}
                className={this.props.currentPage === "Profile" ? "active" : "deactive"}>
                <Link to="/profile"> Profile </Link>
              </NavItem>
              <NavItem onClick={this.props.handleLogout}><div> Sign Out </div> </NavItem>
            </span>
          )}
      </Navbar>
    );
  }
}