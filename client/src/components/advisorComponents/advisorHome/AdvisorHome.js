import React from "react";
import "./index.css"
import { Card } from 'react-materialize';



export default class advHome extends React.Component {

  // Future plan is to have an API call here to pull recent news from a database that has a UI available for people to post news that is auto-pulled and formatted to display here
  handleNews() {
    return (
      <div>
        <h2> Unity Launches Product Demo!</h2>
        <hr></hr>
        <br></br>
        <h5> Tuesday, November 13, 2018</h5>
        <br></br>
        <p>
          The team behind Unity presents their first public demo of their Stock Finder Application today. Within weeks the team was able to utilize D3, React Charts, React Routing, Socket.IO and completely overriding React Materialize to bring their vision to life.
        </p>
        <br></br>
        <p> -Unity Team</p>
      </div>
    )
  }
  render() {
    return (
      <div className="advisorWindow">
        <Card className="advHeader z-depth-4"> Unity News 
        </Card>
        <Card className="z-depth-4"> {this.handleNews()} </Card>
      </div>
    )
  }
}