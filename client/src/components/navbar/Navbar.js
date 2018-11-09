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

  render() {
    return (
      <Navbar brand={brandLogo}>
        <div className="flexAdjust">
          <span className="selfCenter">
            <li>
              <div
                onClick={() => this.props.handlePageChange("home")}>
                <Link className="link-color" to="/"> Home </Link>
              </div>
            </li>
            <li className="centerMargin">
              <div
                onClick={() => this.props.handlePageChange("Search")}>
                <Link className="link-color" to="/search"> Search </Link>
              </div>
            </li>
          </span>
          <span className="selfEnd">
            {!this.props.user && !this.props.advisor ? (
              <li>
                <div>
                  <Modal
                    header='Log In'
                    trigger={<StyledButton className="logInButton"> Log In</StyledButton>}>
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
                      <Input
                          label="username"
                          name="username"
                          type="text"
                          value={this.state.username}
                          onChange={this.handleChange('username')}
                        />
                      <Input
                          label="password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.handleChange('password')}
                        />
                      <StyledButton type="submit" className="formSubmit logInButton modal-action modal-close">Log In</StyledButton>
                    </form>
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
                      <Link className="link-color" to="/user"> Dashboard </Link>
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