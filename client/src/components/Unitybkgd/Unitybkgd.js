import React from "react";
// import SignUpForm from "./signupForm"
import "./Unitybkgd.css";
import "../signupForm"
import SignUpForm from "../signupForm";


export default () => (
  <div id="home">
    <div className="color-overlay"></div>
      <div className ="landing-text responsive">
      <span class="unity-logo"></span>
          <h3>Where clients, information</h3>
          <h4>&</h4>
          <h3>advisors unite</h3>
          <SignUpForm />
      </div>
  </div>
);