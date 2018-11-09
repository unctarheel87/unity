import React from 'react';

export default (props) => {
  if (props.logo) {

    return (
      <div>
        <h3>
          Snapshot: {props.stockInfo.companyName}
          <img src={props.logo.url} alt={props.stockInfo.companyName}
            style={{ width: 40, height: 40, marginLeft: 10 }} />

        </h3>
        <h5 className="stockPrice"> ${props.stockPrice}</h5>
      </div>
    )
  } else {
    return (
      <h3>Company Search Results</h3>
    )
  }
}