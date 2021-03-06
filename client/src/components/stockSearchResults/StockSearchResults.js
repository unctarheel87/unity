import React from 'react';
import StockSearchHeader from '../StockSearchHeader';
import ChartComponent from '../ChartComponent';
import StockSearchNews from '../StockSearchNews';
import StockSearchInfo from '../StockSearchInfo';
import { Card } from 'react-materialize';

function StockSearchResults(props) {

    return  (
      <Card className="z-depth-4">
        <StockSearchHeader logo={props.logo} stockInfo={props.stockInfo} />
        <ChartComponent stockData={props.stockData} />
        <StockSearchNews stockNews={props.stockNews} />
        <StockSearchInfo stockInfo={props.stockInfo} loggedIn={props.loggedIn} />
      </Card>
      
    );
}

export default StockSearchResults;