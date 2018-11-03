import React from "react";
import { Link } from "react-router-dom"
import { Navbar, NavItem, Modal } from 'react-materialize'
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
      <Navbar brand='Unity' right>
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