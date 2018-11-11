import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WatchListItem from '../watchListItem';
import UserNews from '../userNews';
import '../../pages/userDashboard.css';


export default class UserDashHome extends Component {
  render() {
    if(this.props.user.stocks.length > 0) {
      return (
        <div className="user-dashboard">
          <ul className="watchlist-container">
            <h4>My Watchlist</h4>
            <div className="watchlist-border">
            {this.props.user.stocks.map(stock => (
              <WatchListItem key={stock._id} stock={stock} getUser={this.props.getUser}/>
            ))}
            </div>
          </ul>
          <div className="news-feed">
            <h4>My News</h4>
            {this.props.user.stocks.map(stock => (
              <UserNews key={stock._id} stock={stock}/>
            ))}
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="user-dashboard">
          <ul className="watchlist-container">
            <h4>My Watchlist</h4>
            <div className="watchlist-border">
              <Link to="/search" style={{color: "white", fontSize: 18}}>Go to <strong style={{color: "navy"}}>Search Page</strong> to add Stocks</Link>
            </div>
          </ul>
          <div className="news-feed">
            <h4>My News</h4>
            <p style={{color: "white", textAlign: "center", fontSize: 18}}>No News to Display</p>
          </div>
        </div>
      )
    }

  }
  
}