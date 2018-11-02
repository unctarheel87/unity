import React from "react";
import Bio from "../components/userBio"

export default class Profile extends React.Component {

  render() {
    return (
      <div className="container">
        <h1> Profile Page </h1>
        <Bio />
        {/* <Alerts /> */}
        {/* <Favorites /> */}
      </div>
    )
  }

};