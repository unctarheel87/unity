import React from "react";
import "./advisorDash.css";
import AdvisorNav from "../components/advisorComponents/advNavigation"
import AdvisorHome from "../components/advisorComponents/advisorHome"
import ClientList from "../components/advisorComponents/clientList"
import Messages from "../components/advisorComponents/messages"
import Preferences from "../components/advisorComponents/preferences"

export default class Profile extends React.Component {
  state = {
    currentTab: "home"
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
      return <Messages users={this.props.advisor.users}/>
    }
    else if (this.state.currentTab === "preferences") {
      return <Preferences />
    }
  }

  render() {
    return (
      <div>
        <div className="advStructure">
          <AdvisorNav handleTab={this.handleTab} />
          <div className="container">
            {this.renderPage()}
          </div>
        </div>
      </div >

    )
  }

};