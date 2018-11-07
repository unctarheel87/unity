import React from 'react';
 import { Card } from 'react-materialize';

export default (props) => {
  return (
    <Card className="news">
      <h5>Related News</h5>
      <ul>
      <strong><li>{props.stockNews.headline}</li></strong>
       <li>{props.stockNews.summary}</li> 
      </ul>
    </Card>
  )
}