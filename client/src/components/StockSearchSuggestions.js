import React from 'react';

export default (props) => {
  const peer = props.peers.map(peer => {
    return (
     <li><a class="btn-flat" href="/search">{peer}</a></li>
    )
  })
  return (
    <div>
      <h6>Suggested Searches</h6>
      <ul>
        {peer}
      </ul>
    </div>
  )
}