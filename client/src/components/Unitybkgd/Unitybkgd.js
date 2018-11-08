import React from "react";
// import SignUpForm from "./signupForm"
import "./Unitybkgd.css";
import "../signupForm"
import SignUpForm from "../signupForm";

import styled from "styled-components"

const StyledH3 = styled.h3`
      & {
        color: #fff;
      }
`


export default () => (
  <div>
    <div id="home">
      <div className="color-overlay"></div>
      <div className="landing-text responsive">
        <span className="unity-logo hide-on-med-and-down"></span>
        <StyledH3>Where clients, information, and advisors <i>Unite</i></StyledH3>
        {/* <StyledH3>Unite</StyledH3> */}
        <SignUpForm />
      </div>
    </div>
  </div>
);