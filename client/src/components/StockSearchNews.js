import React from 'react';
import { Card } from 'react-materialize';

export default (props) => {
  return (
    <Card>
      <ul>
        <li>{props.stockNews.headline}</li>
        <li>{props.stockNews.summary}</li>
      </ul>
    </Card>
  )
}