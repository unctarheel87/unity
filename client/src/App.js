import React, { Component } from 'react';
import './App.css';
// import Backdrop from "./components/backdrop"
import Footer from "./components/footer"
import Jumbotron from "./components/jumbotron"
import Nav from "./components/navbar"
import SearchForm from "./components/searchForm"
import StockItem from "./components/stockItem"
// import StockList from "./components/stocklist"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <SearchForm />
        <StockItem />
        <br></br>
        <Footer />
      </div>
    )
  }
};

export default App;
