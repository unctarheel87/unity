import React from "react";
import Unitybkgd from "../components/Unitybkgd"
import Companyinfo from "../components/companyinfo";
import AdvisorInformation from "../components/homeComponents/advisorInformation"
import DataInformation from "../components/homeComponents/dataInformation"
// import styled from "styled-components"
export default class Home extends React.Component {



  render() {
    return (
      <div>
        <Unitybkgd />
        <DataInformation />
        <AdvisorInformation />
        <Companyinfo />
      </div>
    )
  }

};