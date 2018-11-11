import React from 'react';
import UserDashHome from '../components/userDashHome';
import UserMessages from '../components/userMessages';
import './userDashboard.css';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 'UserDashHome'
    }
  }
  componentDidMount() {
    this.props.getUser()
  }
  handleTab = (event) => {
    if(event.currentTarget.value === "home" && this.state.currentTab === "Messages") {
      this.setState({
        currentTab: "UserDashHome"
      })
    }
    else if(event.currentTarget.value === "messages" && this.state.currentTab === "UserDashHome") {
      this.setState({
        currentTab: "Messages"
      })
    }
    else {
      return;
    }
  }

  renderPage() {
    if(this.state.currentTab === 'UserDashHome') {
      return <UserDashHome user={this.props.user} getUser={this.props.getUser}/>
    }
    else if(this.state.currentTab === 'Messages') {
      return (
        <div className="user-messages">
          <UserMessages user={this.props.user} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="user-dash-nav">
          <p className="user-dash-nav-name">{this.props.user.username}'s Dashboard</p>
          <button onClick={this.handleTab} value="home"><p>Home</p></button>
          <button onClick={this.handleTab} value="messages"><p>Messages</p></button>
        </div>
        {this.renderPage()}
      </div>
    )
  }


    
};

export default UserDashboard;