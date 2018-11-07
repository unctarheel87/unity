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
    price: '',
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
  handleClickEvent = event => {
    if (event) event.preventDefault();
    this.setState({ data: "loading" });
    setTimeout(this.handleClick, 2000);
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
        this.setState({ peers: response.data })
      })
      .catch(error => console.log(error))
    //logo
    API.getCompanyLogo(term)
      .then(response => {
        this.setState({ logo: response.data })
      })
      .catch(error => console.log(error))
    //price
    API.getCompanyPrice(term)
      .then(response => {
        console.log(response.data)
        this.setState({ price: response.data })
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
              onClick={this.handleClickEvent}
              peers={this.state.peers}
            />
          </div>
          <div className="searchResults">
            {/* <StockSearchHeader logo={this.state.logo} stockInfo={this.state.stockInfo} /> */}

            <StockSearchHeader logo={this.state.logo} stockInfo={this.state.stockInfo} stockPrice={this.state.price} />
            <ChartComponent stockData={this.state} />
            <div className = "newsFlex">
              <StockSearchInfo stockInfo={this.state.stockInfo} stockPrice={this.state.price} loggedIn={this.loggedIn} />
              <StockSearchNews stockNews={this.state.stockNews} />
            </div>
          </div>
        </div>

      </div>

    )
  }
};

export default Search;