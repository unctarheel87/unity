import React, { Component } from 'react';
// import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer"
// import Jumbotron from "./components/jumbotron"
import Nav from "./components/navbar"
// import SearchForm from "./components/searchForm"
import UserDashboard from "./components/userDashboard";
// import StockItem from "./components/stockItem"
import Chart from './components/sChart';
import { getData } from "./utils/API.js"
import Auth from './utils/Auth';

import { TypeChooser } from "react-stockcharts/lib/helper";

//Pages
import Search from "./pages/Search"

class App extends Component {
  state = {
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    Auth.getUser()
    .then(response => {
			console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
  }
	handleLogin = (user) => {
    Auth.login(user)
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
  }
  handleLogout = (event) => {
    event.preventDefault();
    Auth.logout()
    .then(response => {
			console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}
  render() {
    return (
      <div>
      <Nav handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        {this.state.loggedIn && (
          <div className="user-dash">
            <UserDashboard />
          </div>
        )}
        {!this.state.loggedIn && (
          <div>
            <Search />
            <br></br>
            <Footer />
          </div>
        )}
        </div>
    )
  }   
};

export default App;