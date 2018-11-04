import React from 'react';
import { Card } from 'react-materialize';

export default (props) => {
  return (
    <Card>
      <h5>Company Information</h5>
      <ul>
        <strong><li>Company Name: </li></strong>{props.stockInfo.companyName} 
        <strong><li>Exchange: </li></strong>{props.stockInfo.exchange}
        <strong><li>Sector: </li></strong> {props.stockInfo.sector}
        <strong><li>Description: </li></strong> {props.stockInfo.description}
        <strong><li>Website: </li></strong>{props.stockInfo.website}
      </ul>
    </Card>
  )
}