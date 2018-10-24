import React from "react";
import "./navbar.css";

const Nav = () => (
  <div>
    <navbar brand='logo' right>
      <navItem onClick={() => console.log('test click')}>Getting started</navItem>
      <navItem href='components.html'>Components</navItem>
    </navbar>
  </div>
);

export default Nav;