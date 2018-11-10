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

  handleTab = () => {
    this.setState({ 
      currentTab: this.state.currentTab === 'UserDashHome' ? 'Messages' : 'UserDashHome'
    })
  }

  renderPage() {
    if(this.state.currentTab === 'UserDashHome') {
      return <UserDashHome user={this.props.user} />
    }
    else if(this.state.currentTab === 'Messages') {
      return (
        <div className="user-messages">
          <h4>Message</h4>
          <UserMessages user={this.props.user} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="user-dash-nav">
          <p className="user-dash-nav-name">{this.props.user.username}</p>
          <button onClick={this.handleTab}><p>Home</p></button>
          <button onClick={this.handleTab}><p>Messages</p></button>
        </div>
        {this.renderPage()}
      </div>
    )
  }


    
};

export default UserDashboard;