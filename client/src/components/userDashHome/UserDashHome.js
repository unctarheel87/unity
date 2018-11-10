import React from 'react';
import WatchListItem from '../watchListItem';
import UserNews from '../userNews';
import '../../pages/userDashboard.css';


export default (props) => (

  <div className="user-dashboard">
    <ul className="watchlist-container">
    <h4>My Watchlist</h4>
    <div className="watchlist-border">
    {props.user.stocks.map(stock => (
      <WatchListItem stock={stock} />
    ))}
    </div>
    </ul>
    <div className="news-feed">
      <h4>My News</h4>
      {props.user.stocks.map(stock => (
        <UserNews stock={stock} />
      ))}
    </div>
  </div>
  
)