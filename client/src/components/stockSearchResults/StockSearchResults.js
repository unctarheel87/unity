import React from 'react';
import StockSearchHeader from '../StockSearchHeader';
import ChartComponent from '../ChartComponent';
import StockSearchNews from '../StockSearchNews';
import StockSearchInfo from '../StockSearchInfo';

function StockSearchResults(props) {

    return  (
      <div>
        <StockSearchHeader logo={props.logo} stockInfo={props.stockInfo} />
        <ChartComponent stockData={props.stockData} />
        <StockSearchNews stockNews={props.stockNews} />
        <StockSearchInfo stockInfo={props.stockInfo} loggedIn={props.loggedIn} />
      </div>
      
    );
}

export default StockSearchResults;