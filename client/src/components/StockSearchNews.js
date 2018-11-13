import React from 'react';
import {Card} from "react-materialize";

export default (props) => {
  return (
  <Card className="z-depth-4">  
    <div className="news">
       <h5 className="newsTitle">Related News</h5>
        <ul>
          <strong><li>{props.stockNews.headline}</li></strong>
          <li>{props.stockNews.summary}</li>
        </ul>
    </div>
    </Card>  
  )
}