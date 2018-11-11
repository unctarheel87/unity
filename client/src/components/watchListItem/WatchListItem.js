import React, { Component } from 'react';
import './watchListItem.css';
import ChartComponent from '../ChartComponent';
import API from '../../utils/API.js';

export default class WatchListItem extends Component {
  state = {
    stocks: [],
    term: null,
    value: '',
    data: null,
    hasClicked: false
  };
  handleClick = () => {
    this.getStockData(this.props.stock.ticker)
    this.setState({ hasClicked: this.state.hasClicked ? false : true })
  }
  removeWatchListItem = (e) => {
    e.stopPropagation();
    let id = this.props.stock._id;
    API.deleteStock(id)
    .then(response =>  this.props.getUser())
    .catch(err => console.log(err))
  }
  getStockData = (term) => API.getData(term).then(data => {
    this.setState({ data })
  })
  render() {
    return (
      <div className="watchlist-item-card z-depth-2">
        <li className="watchlist-item"
            onClick={this.handleClick} 
        >
          <i className="material-icons" id="watchlist-items-action">show_chart</i>
          <h5>{this.props.stock.ticker}</h5>
          <button className="remove-btn" onClick={this.removeWatchListItem}>X</button>
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