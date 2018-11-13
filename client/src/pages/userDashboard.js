import React from 'react';
import UserDashNav from '../components/userDashNav';
import UserDashHome from '../components/userDashHome';
import UserMessages from '../components/userMessages';
import AdvisorHome from "../components/advisorComponents/advisorHome";
import Preferences from "../components/advisorComponents/preferences";
import "./userDashboard.css";
import openSocket from 'socket.io-client';


class UserDashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 'home',
    }
  }
  componentDidMount() {
    this.props.getUser()
    const socket = openSocket();

    socket.on('message', msg => {
      window.Materialize.toast(msg, 10000)
    })
  }
  handleTab = tab => {
    this.setState({ currentTab: tab});
  }

  renderPage() {
    if (this.state.currentTab === "home") {
      return <AdvisorHome />
    }
    else if (this.state.currentTab === "watchlist") {
      return <UserDashHome user={this.props.user} getUser={this.props.getUser} />
    }
    else if (this.state.currentTab === "messages") {
      return <UserMessages user={this.props.user} getUser={this.props.getUser} emit={this.emit}/>
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
            <UserDashNav handleTab={this.handleTab} user={this.props.user} />
          </div>
          <div className="mainWindow">
            <div className="user-container">
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

export default UserDashboard;