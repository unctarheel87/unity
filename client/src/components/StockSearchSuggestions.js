import React from 'react';
import {Card} from "react-materialize";

export default (props) => {
  const peer = props.peers.map(peer => {
    return (
     <li><button class="btn-flat" onClick={() => props.shortcutClick(peer)}>{peer}</button></li>
    )
  })
  return (
  <Card className="z-depth-4">  
    <div className = "suggested" style={{minHeight: 100}}>
      <h5>Suggested Searches</h5>
      <ul className="two-columns">
        {peer}
      </ul>
    </div>
    </Card>  
  )
}