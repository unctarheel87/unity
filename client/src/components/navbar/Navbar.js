import React from "react";
import { Link } from "react-router-dom"
import { Button, Navbar, NavItem, Modal } from 'react-materialize'
import styled from "styled-components";
import "./navbar.css";

const StyledButton = styled(Button)`
    &&&&&&{
      margin-left: 20px;
      border: 2px solid #2f4f4f;
      color: #2f4f4f;
      background-color: #fff;
      border-radius: 12px;
    }
    &:hover{
      background: #2f4f4f;
      color: #fff;
    }
`

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

      <div className="z-depth-4">
        <Navbar brand='Unity' right>
          <li>
            <div
              onClick={() => this.props.handlePageChange("home")}>
              <Link className="link-color" to="/"> Home </Link>
            </div>
          </li>
          <li>
            <div
              onClick={() => this.props.handlePageChange("Search")}>
              <Link className="link-color" to="/search"> Search </Link>
            </div>
          </li>
          {!this.props.userExists ? (
            <li>
              <div>
                <Modal
                  header='Log In'
                  trigger={<StyledButton className="logInButton"> Log In</StyledButton>}>
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
                    <StyledButton type="submit" className="formSubmit logInButton modal-action modal-close">Log In</StyledButton>
                  </form>
                </Modal>
              </div>
            </li>
          ) : (
              <span>
                <NavItem>
                  <div className="link-color" > Hello, Username</div>
                </NavItem>
                <li>
                  <div
                    onClick={() => this.props.handlePageChange("Profile")}>
                    <Link className="link-color" to="/user"> Dashboard </Link>
                  </div>
                </li>
                <NavItem onClick={this.props.handleLogout}><div className="link-color"> Sign Out </div> </NavItem>
              </span>
            )}
        </Navbar>
      </div>
    );
  }
}