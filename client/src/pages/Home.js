import React from "react";
import Unitybkgd from "../components/Unitybkgd"
import Companyinfo from "../components/companyinfo";
export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Unitybkgd />
        <Companyinfo />
      </div>
    )
  }

};