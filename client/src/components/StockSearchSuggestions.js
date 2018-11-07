import React from 'react';
// import { Card } from 'react-materialize';

export default (props) => {
  const peer = props.peers.map(peer => {
    return (
     <li><a class="btn-flat" href="/search">{peer}</a></li>
    )
  })
  return (
    <div className = "suggested" style={{minHeight: 100}}>
      <h5>Suggested Searches</h5>
      <ul>
        {peer}
      </ul>
    </div>
  )
}