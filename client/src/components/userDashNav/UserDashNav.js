import React from 'react';
import './index.css';
import styled from 'styled-components';

export default class UserDashNav extends React.Component {

  render() {
    return (
      <div className="z-depth-4 animatedNav">
        {/* Desktop navbar */}
        <div className="advNav hide-on-small-and-down">
          <div className="advNavItem" onClick={() => this.props.handleTab("home")}>
            <i className="small material-icons advNavIcons">home</i>
            <span className="advNavText">Home</span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("watchlist")}>
            <i className="small material-icons advNavIcons">visibility</i>
            <span className="advNavText">Watch List </span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("messages")}>
            <i className="small material-icons advNavIcons">mail</i>
            <span className="advNavText">Messages</span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("preferences")}>
            <i className="small material-icons advNavIcons">settings</i>
            <span className="advNavText">Preferences</span>
          </div>
          <div className="advisor-name">
            <p>Your Advisor:</p>
            <h5>{this.props.user.advisor}</h5>
          </div>
        </div>
        {/* mobile navbar */}
        <div className="advNav hide-on-med-and-up advMobileFlex">
          <div className="advNavItem" onClick={() => this.props.handleTab("home")}>
            <i className="small material-icons advNavIcons">home</i>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("watchlist")}>
            <i className="small material-icons advNavIcons">visibility</i>
            <span className="advNavText">Watch List </span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("messages")}>
            <i className="small material-icons advNavIcons">mail</i>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("preferences")}>
            <i className="small material-icons advNavIcons">settings</i>
          </div>
        </div>
      </div>
    )
  }
}