import React from "react";
import API from "../utils/API.js"
// START OF SEARCH
import _ from 'lodash';
import axios from 'axios';
import StockSearchBar from '../components/stockSearchBar';
import StockSearchList from '../components/stockSearchList';
import ChartComponent from '../components/ChartComponent';
// END OF SEARCH


class Search extends React.Component {
  //START OF SEARCH
  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
      term: null,
      value: '',
      data: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getStockData = (term) => API.getData(term).then(data => {
    this.setState({ data })
  })

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleClick(event) {
    if (event) event.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    });

    let term = this.state.value;
    const key = '4OC0HAE5XSEPU7WG';
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;
    //GOOG, AAPL, MSFT, FB, AMZN, NFLX 
    axios.get(url)
      .then(res => {
        console.log(res.data);
        // flattenDeep() lodash function, which flattens nested arrays into one array.
        let stocks = _.flattenDeep(Array.from(res.data['Stock Quotes']).map((stock) => [{ symbol: stock['1. symbol'], price: stock['2. price'], timestamp: stock['4. timestamp'] }]));
        console.log(stocks);
        this.setState((state, props) => {
          return {
            ...state,
            stocks
          }
        })
        this.getStockData(this.state.term)
      })
      .catch(error => console.log(error))
  }

//END OF SEARCH

    render() {
      const value = this.state.value;
        return (
          <div>
            {/* START OF SEARCH */}
            <div className="App">
              <StockSearchBar value={value}
                onChange={this.handleChange}
                onClick={this.handleClick} />
              <StockSearchList stockItems={this.state.stocks} loggedIn={this.props.loggedIn} />
            </div>
            {/* END OF SEARCH */}
            <ChartComponent stockData={this.state} />
            <div className="watchList">
              <h1>{this.props.user && this.props.user.stocks[0].ticker}</h1>
            </div>
          </div>
        )
    }

};

export default Search;