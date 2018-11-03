import React from "react";
import API from "../utils/API.js"
import StockSearchBar from '../components/stockSearchBar';
import StockSearchInfo from '../components/StockSearchInfo';
import StockSearchNews from '../components/StockSearchNews';
import StockSearchSuggestions from '../components/StockSearchSuggestions';
import ChartComponent from '../components/ChartComponent';

class Search extends React.Component {
  state = {
    stockInfo: [],
    stockNews: [],
    peers: [],
    term: null,
    value: '',
    data: null
  }
  getStockData = (term) => API.getData(term).then(data => {
    this.setState({ data })
  })
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }
  handleClick = event => {
    if (event) event.preventDefault();
    let term = this.state.value;
    //info
    API.getCompanyInfo(term)
      .then(response => {
        console.log(response.data)
        this.setState({ stockInfo: response.data })
        this.getStockData(this.state.value)
      })
      .catch(error => console.log(error))
    //news  
    API.getCompanyNews(term)
    .then(response => {
      console.log(response.data)
      this.setState({ stockNews: response.data[0] })
    })
    .catch(error => console.log(error))
    //peers
    API.getCompanyPeers(term)
    .then(response => {
      console.log(response.data)
      this.setState({ peers: response.data })
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        {/* Rhummel and Brendan arrange these components */}
        <StockSearchBar value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClick} 
        />
        <StockSearchInfo stockInfo={this.state.stockInfo} loggedIn={this.props.loggedIn} />
        <StockSearchNews stockNews={this.state.stockNews} />
        <StockSearchSuggestions peers={this.state.peers} />
        <ChartComponent stockData={this.state} />
      </div>
    )
  }
};

export default Search;