import React from "react";
import { getData } from "../utils/API.js"
import { TypeChooser } from "react-stockcharts/lib/helper";
import Chart from '../components/sChart';
// START OF SEARCH
import _ from 'lodash';
import axios from 'axios';
import StockSearchBar from '../components/stockSearchBar';
import StockSearchList from '../components/stockSearchList';
// END OF SEARCH
class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then(data => {
      this.setState({ data })
    })
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }
    return (
      <TypeChooser>
        {type => <Chart type={type} data={this.state.data} />}
      </TypeChooser>
    )
  }
}

class Search extends React.Component {
  //START OF SEARCH
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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
              <StockSearchList stockItems={this.state.stocks} />
            </div>
            {/* END OF SEARCH */}
            <ChartComponent />
            <br></br>
          </div>
        )
    }

};

export default Search;