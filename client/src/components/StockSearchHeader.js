import React from 'react';

export default (props) => {
  if(props.logo) {

    return (
      <h3>
        Snapshot: {props.stockInfo.companyName} 
        <span><img src={props.logo.url} alt={props.stockInfo.companyName}/></span>
      </h3>
      )
  } else {
    return (
      <h3>Company Search Results</h3>
    )
  }
}