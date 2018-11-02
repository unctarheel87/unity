import React from "react";
// import axios from 'axios';


class AdvisorDashboard extends React.Component {

  state = {
    stocks: [],
    clients: [],
    value: ''
  };

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
      return (
        <div>
          This is the Advisor Dashboard
        </div>
      )
  }

};

export default AdvisorDashboard;