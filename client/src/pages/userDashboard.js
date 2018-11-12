import React from 'react';
import UserDashHome from '../components/userDashHome';
import UserMessages from '../components/userMessages';
import './userDashboard.css';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 'UserDashHome',
      homeTabStyle: 'user-tab-active',
      messagesTabStyle: 'user-tab-inactive'
    }
  }
  componentDidMount() {
    this.props.getUser()
  }
  handleTab = (event) => {
    if(event.currentTarget.value === "home" && this.state.currentTab === "Messages") {
      this.setState({
        currentTab: "UserDashHome",
        messagesTabStyle: 'user-tab-inactive',
        homeTabStyle: 'user-tab-active',
      })
    }
    else if(event.currentTarget.value === "messages" && this.state.currentTab === "UserDashHome") {
      this.setState({
        currentTab: "Messages",
        homeTabStyle: 'user-tab-inactive',
        messagesTabStyle: 'user-tab-active'
      })
    }
    else {
      return;
    }
  }

  renderPage() {
    if(this.state.currentTab === 'UserDashHome') {
      return <UserDashHome user={this.props.user} getUser={this.props.getUser} />
    }
    else if(this.state.currentTab === 'Messages') {
      return (
        <div className="user-messages">
          <UserMessages user={this.props.user} getUser={this.props.getUser} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="user-dash-nav">
          <p className="user-dash-nav-name">{this.props.user.username}'s Dashboard</p>
          <button onClick={this.handleTab} className={this.state.homeTabStyle} value="home">
            <span>Home</span><i className="material-icons small">home</i></button>
          <button onClick={this.handleTab} className={this.state.messagesTabStyle} value="messages">
            <span>Messages</span><i className="material-icons small">mail</i></button>
        </div>
        {this.renderPage()}
      </div>
    )
  }


    
};

export default UserDashboard;