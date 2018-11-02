import React, { Component } from 'react';


export default class SearchForm extends Component {
  state = {
    search: '',
    client: []
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("clicky click");
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
      </div>
    );
  }
}