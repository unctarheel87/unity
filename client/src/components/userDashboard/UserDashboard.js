import React from 'react';
import WatchListItem from '../watchListItem';
import UserNews from '../userNews';
import './userDashboard.css'

export default (props) => (
  <div className="user-dashboard">
    <div className="user-profile">
      <h4>Profile</h4>
      <h5>Username: {props.user.username}</h5>
    </div>
    <div className="news-feed">
      <h4>My News</h4>
      {props.user.stocks.map(stock => (
        <UserNews stock={stock} />
      ))}
    </div>
    <ul className="watchlist-container">
      <h4>My Watchlist</h4>
      <div className="watchlist-border">
      {props.user.stocks.map(stock => (
        <WatchListItem stock={stock} />
      ))}
      </div>
      </ul>
  </div>
);