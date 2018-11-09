import React from "react";
import {Link} from "react-router-dom"
import { Footer } from "react-materialize";
import "./footer.css";

export default () => (
  <div className="footer">
    <Footer copyrights="&copy; 2018 Unity"
      // moreLinks={
      //   <a className="grey-text text-lighten-4 right" href="https://github.com/unctarheel87/unity.git">Github Link</a>
      // }
      links={
        <ul>
          <li><Link to="/" className="grey-text text-lighten-3" href="#!">Home</Link></li>
          <li><Link to="/search" className="grey-text text-lighten-3" href="#!">Search</Link></li>
          <li><Link to="/" className="grey-text text-lighten-3" href="#!">Our Advisors</Link></li>
          <li><Link to="/" className="grey-text text-lighten-3" href="https://github.com/unctarheel87/unity.git">Github Link</Link></li>
        </ul>
      }
      className='example'
    >
        <h5 className="white-text">Unity</h5>
        <p className="grey-text text-lighten-4">This is a demonstration web application. The website and information contained herein are not intended to be a source of advice or financial advisement with respect to the material presented and the information and/or documents contained in this website do not constitute financial or investment advice.</p>
    </Footer>
  </div>
);