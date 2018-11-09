import React from 'react';
import { Icon } from 'react-materialize';


export default (props) => {
  if (props.logo) {

    return (
      <div>
        <h3>
          Snapshot: {props.stockInfo.companyName}
          <img src={props.logo.url} alt={props.stockInfo.companyName}
            style={{ width: 40, height: 40, marginLeft: 10 }} />

        </h3>
        <h4 className="stockPrice"> ${props.stockPrice}              
          <span><button style={{background: "none", border: "none"}} onClick={props.onClick}>
            <Icon medium>
              add_box
            </Icon></button>
          </span>
        </h4>
      </div>
    )
  } else {
    return (
      <h3>Company Search Results</h3>
    )
  }
}