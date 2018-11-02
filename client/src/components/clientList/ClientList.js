import React, { Component } from "react";
import ClientCard from "../clientCard";
import axios from "axios";

class ClientList extends Component {

 state = {
   clients: []
 }

  componentDidMount() {
    axios.get("/advisor/api/clients")
      .then(res => this.setState({ clients: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        {this.state.clients.map(client => {
          return <ClientCard key={client._id} client={client} />
        })}
      </div>
    )
  }
  
};

export default ClientList;