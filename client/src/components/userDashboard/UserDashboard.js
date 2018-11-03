import React from 'react';
import WatchListItem from '../watchListItem';
import './userDashboard.css'
import { Link } from 'react-router-dom';

export default (props) => (
  <div className="user-dashboard">
    <div className="user-profile">
      <h4>Profile</h4>
      <h5>Username: {props.user.username}</h5>
    </div>
    <div className="news-feed">
      <h4>My News</h4>
      <Link to="/search">Search stocks</Link>
    </div>
    <ul className="watchlist-container">
      <h4>My Watchlist</h4>
      {props.user.stocks.map(stock => (
        <WatchListItem stock={stock} />
      ))}
      </ul>
  </div>
);