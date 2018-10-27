import React, { Component } from 'react';
import './App.css';
import Footer from "./components/footer"
import Jumbotron from "./components/jumbotron"
import Nav from "./components/navbar"
import SearchForm from "./components/searchForm"
import StockItem from "./components/stockItem"

class App extends Component {
  state = {
    username: "john",
    password: "super"
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
        </Jumbotron>
        <SearchForm />
        <StockItem />
        <br></br>
        <Footer />
      </div>
    )
  }
};

export default App;
