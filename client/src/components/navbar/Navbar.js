/* global $ */
import React from "react";
import { Link } from "react-router-dom"
import { Button, Navbar, NavItem, Modal, Input } from 'react-materialize'
import styled from "styled-components";
import "./navbar.css";

import logo from "../Unitybkgd/unity-logo-b2.png";

const StyledButton = styled(Button)`
    &{
      margin-left: 20px;
      border: 1px solid #336780;
      color: #336780;
      background-color: #fff;
      border-radius: 5px;
      // border-radius: 12px;
    }
    &:hover{
      background: #336780;
      color: #fff;
    }
`
//const brandLogo = <img src={logo} alt="logo-brand" className="navLogo hide-on-med-and-up"></img>
const brandLogo = <img src={logo} alt="logo-brand" className="navLogo"></img>


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

  handleSidenav = event => {
    $(".button-collapse").sideNav({
      closeOnClick: true
    })
    $(".sidenav-overlay").sideNav("hide")
  }

  render() {
    return (
      <Navbar brand={brandLogo}>
        <div className="flexAdjust">
          <span className="selfCenter">
            <li>
              <div
                onClick={() => this.props.handlePageChange("home")}>
                <Link onClick={this.handleSidenav} className="link-color" to="/"> Home </Link>
              </div>
            </li>
            <li className="centerMargin">
              <div
                onClick={() => this.props.handlePageChange("Search")}>
                <Link onClick={this.handleSidenav} className="link-color" to="/search"> Search </Link>
              </div>
            </li>
          </span>
          <span className="selfEnd">
            {!this.props.user && !this.props.advisor ? (
              <li>
                <div>
                  <Modal
                    header='Log In'
                    trigger={<StyledButton className="logInButton"><div onClick={this.handleSidenav}> Log In</div></StyledButton>}>
                    <form onSubmit={this.handleSubmit}>
                      <Input s={6} 
                        required 
                        type='select' 
                        label="Choose your role" 
                        onChange={this.props.handleRoleChange}
                        value={this.props.role}
                      >
                        <option value='user'>User</option>
                        <option value='advisor'>Advisor</option>
                      </Input>
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
                      <StyledButton type="submit" className="formSubmit logInButton">Log In</StyledButton>
                    </form>
                    <p>{this.props.loginError}</p>
                  </Modal>
                </div>
              </li>
            ) : (
                <span>
                  <NavItem>
                    <div className="link-color" > Hello, {(this.props.user && this.props.user.username) || (this.props.advisor && this.props.advisor.username)}</div>
                  </NavItem>
                  <li>
                    <div
                      onClick={() => this.props.handlePageChange("Profile")}>
                      {this.props.user &&
                        <Link onClick={this.handleSidenav} className="link-color" to="/user"> Dashboard </Link>
                      }
                      {this.props.advisor &&
                        <Link onClick={this.handleSidenav} className="link-color" to="/advisor"> Dashboard </Link>
                      }
                    </div>
                  </li>
                  <NavItem onClick={this.props.handleLogout}><div className="link-color"> Sign Out </div> </NavItem>
                </span>
              )}
          </span>
        </div>
      </Navbar>
    );
  }
}