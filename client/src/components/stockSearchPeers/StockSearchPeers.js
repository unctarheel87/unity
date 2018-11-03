import React from 'react';

const StockSearchPeers = (props) => {
  return (
    <li className="stock-search-item">
      <div><span>Similar Stocks: </span></div>
      {/* parseInt is used to convert the number to an integer and then used toFixed(2) to convert it to a number with 2 decimal places. Adding 2 decimal places to an integer will always result in .00 */}
      <div><span>{props.peers.item} </span></div>
      {props.loggedIn ?
      <button onClick={() => console.log("login click worked")}>add</button>
      : 
      <button>Sign-In</button>}
    </li>
  )
}
export default StockSearchPeers;