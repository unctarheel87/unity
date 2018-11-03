import React from 'react';
import { Card } from 'react-materialize';

export default (props) => {
  return (
    <Card>
      <ul>
        <li>Company Name: {props.stockInfo.companyName} </li>
        <li>Exchange: {props.stockInfo.exchange}</li>
        <li>Sector: {props.stockInfo.sector}</li>
        <li>Description: {props.stockInfo.description}</li>
        <li>Website: {props.stockInfo.website}</li>
      </ul>
    </Card>
  )
}