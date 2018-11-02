import React from 'react';
import './stockSearchItem.css';
import API from '../../utils/API';

const StockSearchItem = (props) => {
  return (
    <li className="stock-search-item">
      <div><span>Stock Symbol: </span>{ props.symbol }</div>
      {/* parseInt is used to convert the number to an integer and then used toFixed(2) to convert it to a number with 2 decimal places. Adding 2 decimal places to an integer will always result in .00 */}
      <div><span>Price: </span>${ parseInt(props.price).toFixed(2) }</div>
      <div><span>Time: </span>{ props.timestamp }</div>
      {props.loggedIn ?
      <button onClick={() => API.insertTicker(props.symbol)}>Add stock to watchlist</button>
      : 
      <button>Sign-In</button>}
    </li>
  )
}
export default StockSearchItem;
