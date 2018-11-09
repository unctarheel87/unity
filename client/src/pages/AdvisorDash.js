import React from "react";
import { Card } from "react-materialize";
import styled from "styled-components";
import "./advisorDash.css";
import AdvisorNav from "../components/advisorComponents/advNavigation";
import AdvisorHome from "../components/advisorComponents/advisorHome";
import ClientList from "../components/advisorComponents/clientList";
import Messages from "../components/advisorComponents/messages";
import Preferences from "../components/advisorComponents/preferences";

const StyledCard = styled(Card)`
      &&&&&&{
       
      }
`

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
      return <ClientList />
    }
    else if (this.state.currentTab === "messages") {
      return <Messages />
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
              <StyledCard>
                {this.renderPage()}
              </StyledCard>
            </div>
          </div>
        </div>
      </div >

    )
  }

};