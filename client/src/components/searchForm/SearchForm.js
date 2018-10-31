import React, { Component } from 'react';
import './searchForm.css';
import StockItem from '../stockItem';
import API from '../../utils/API';

export default class SearchForm extends Component {
  state = {
    search: '',
    stock: []
  }
  componentDidMount() {
    API.companySearch('AAPL')
    .then(res => console.log(res.data.quote))
    .catch(err => console.log(err))
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    API.companySearch(this.state.search)
    .then(res => this.setState({ stock: res.data.quote }))
    .catch(err => console.log(err))
  };
  render() {
    return (
      <div className="searchForm">
        search me
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={this.handleChange('search')} 
          />
          <button type="submit">Search</button>
        </form>
        <StockItem stock={this.state.stock} />
      </div>
    );
  }
}
