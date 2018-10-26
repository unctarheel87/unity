import React from "react";
import { Navbar, NavItem, Dropdown, Modal } from 'react-materialize'
import styled from 'styled-components';
import "./navbar.css";

const StyledDropdown = styled(Dropdown)`
  &&&&&& {
      position: absolute !important;
      top: 64px !important;
  }
`

// Need to add conditional...if user is logged in load dropdownB, if not, load A
export default (props) => (
  <Navbar brand='logo' right>
    <NavItem>
      <Modal
        header='Sign In'
        trigger={<NavItem> Sign In</NavItem>}>
        <form>
          <h4> Username: </h4>
          <input
            name="username"
            type="text">
          </input>
          <br></br>
          <h4> Password: </h4>
          <input
            name="password"
            type="text">
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