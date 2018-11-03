import React, { Component } from 'react';
import './watchListItem.css';
import ChartComponent from '../ChartComponent';
import API from '../../utils/API';

export default class WatchListItem extends Component {
  state = {
    stocks: [],
    term: null,
    value: '',
    data: null,
    hasClicked: false
  };
  componentDidMount() {
    this.getStockData(this.props.stock.ticker)
  }
  handleClick = () => {
    this.setState({ hasClicked: this.state.hasClicked ? false : true })
  }
  getStockData = (term) => API.getData(term).then(data => {
    this.setState({ data })
  })
  render() {
    return (
      <div>
        <li className="watchlist-item"
            onClick={this.handleClick} 
        >
          <i className="material-icons">show_chart</i>
          <h5>{this.props.stock.ticker}</h5>
        </li>
        {this.state.hasClicked &&
          <div className="watchlist-chart">
            <button onClick={this.handleClick}>X</button>
            <ChartComponent stockData={this.state} />
          </div>
        }
      </div>
    )
  }
}