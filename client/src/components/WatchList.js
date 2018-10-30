import React from 'react';
import Item from "./WatchListItem";

const WatchList = props => (

<div className="row">
  
  {props.items.map(item => {
    return <Item key={item._id} item={item} />
  })}
  
</div>
  
);

export default WatchList;
