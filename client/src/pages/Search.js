import React from "react";
import API from "../utils/API.js"
import StockSearchInfo from '../components/StockSearchInfo';
import StockSearchNews from '../components/StockSearchNews';
import SearchSideNav from '../components/searchSideNav';
import StockSearchHeader from '../components/StockSearchHeader';
import ChartComponent from '../components/ChartComponent';
import "./search.css";

class Search extends React.Component {
  state = {
    stockInfo: [],
    stockNews: [],
    peers: [],
    logo: '',
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
    //logo
    API.getCompanyLogo(term)
      .then(response => {
        console.log(response.data)
        this.setState({ logo: response.data })
      })
      .catch(error => console.log(error))
  }
  render() {
      return (
        <div className="App">
            {/* Rhummel and Brendan arrange these components */}
            <div className="searchContainer">
              <div className="searchSideNav">
                <SearchSideNav 
                  value={this.state.value}
                  onChange={this.handleChange}
                  onClick={this.handleClick}
                  peers={this.state.peers}
                />
              </div>
              <div className="searchResults">
                <StockSearchHeader logo={this.state.logo} stockInfo={this.state.stockInfo} />
                <ChartComponent stockData={this.state} />
                <StockSearchNews stockNews={this.state.stockNews} />
                <StockSearchInfo stockInfo={this.state.stockInfo} loggedIn={this.loggedIn} />
              </div>
            </div>
            
          </div>
      
      )
  }
};

export default Search;