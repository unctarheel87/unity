import React, { Component } from 'react';
import UserNewsItem from '../userNewsItem';
import API from '../../utils/API';

export default class UserNews extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    this.getStockNews(this.props.stock.ticker)
  }
  getStockNews = (ticker) => API.getCompanyNews(ticker)
    .then(response => {
    this.setState({ news: response.data })
    console.log(this.state)
    })
    .catch(err => console.log(err));
  render() {
    if(this.state.news.length > 0) {
      return (
        <div>
          {this.state.news.map(newsitem => 
            <UserNewsItem data={newsitem} />
          )}
        </div>
      )
    }else {
      return (
        <div>
          <p>No News</p>
        </div>
      )
    }
  }
}