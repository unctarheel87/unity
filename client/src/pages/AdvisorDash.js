import React from "react";
import { Card } from "react-materialize";
import styled from "styled-components";
import "./advisorDash.css";
import AdvisorNav from "../components/advisorComponents/advNavigation";
import AdvisorHome from "../components/advisorComponents/advisorHome";
import ClientList from "../components/advisorComponents/clientList";
import Messages from "../components/advisorComponents/messages";
import Preferences from "../components/advisorComponents/preferences";
import openSocket from 'socket.io-client';

export default class Profile extends React.Component {
  state = {
    currentTab: "home"
  }

  componentDidMount() {
    const socket = openSocket();

    socket.on('message2', data => {
      console.log(data)
      if(data.advisor === this.props.advisor.username) {
        window.Materialize.toast(data.msg, 10000)
      }
    })
  }

  handleTab = tab => {
    this.setState({ currentTab: tab })
  }

  renderPage() {
    if (this.state.currentTab === "home") {
      return <AdvisorHome />
    } else if (this.state.currentTab === "clients") {
      return <ClientList users={this.props.advisor.users}/>
    }
    else if (this.state.currentTab === "messages") {
      return <Messages advisor = {this.props.advisor} users={this.props.advisor.users} emit={this.emit}/>
    }
    else if (this.state.currentTab === "preferences") {
      return <Preferences />
    }
  }

  render() {
    return (
      <div>
        <div className="advStructure">
          <div className="advNavComp">
            <AdvisorNav handleTab={this.handleTab} />
          </div>
          <div className=" mainWindow">
            <div className="container">
              <div className="animatedCard">
                {this.renderPage()}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

};