import React from 'react';
import { Card } from 'react-materialize';

export default (props) => {
  const peer = props.peers.map(peer => {
    return (
      <li>{peer}</li>
    )
  })
  return (
    <Card>
      <ul>
        { peer }
      </ul>
    </Card>
  )
}