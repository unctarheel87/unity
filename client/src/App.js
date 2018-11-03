import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer"
import Nav from "./components/navbar"
import AdvisorDashboard from "./components/advisorDashboard";
import Auth from './utils/Auth';

//Pages
import Search from "./pages/Search"
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import UserDashboard from './components/userDashboard';
import API from './utils/API';

class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    currentPage: ""
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    this.getUser()
    API.getCompanyInfo('fb');
    API.getCompanyNews('fb');
  }
  getUser = () => Auth.getUser()
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
  handleLogin = (user) => {
    Auth.login(user)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.getUser()
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
      <Router>
        <div>
          <Nav 
          handlePageChange = {this.handlePageChange} currentPage={this.state.currentPage}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout} />
          {this.state.loggedIn && (
            <div className="user-dash">
              <UserDashboard user={this.state.user} />
              <Route path="/search" component={() => <Search loggedIn={this.state.loggedIn} />} />
            </div>
          )}
          {!this.state.loggedIn && (
            <div>
              <Route path="/advisor" component={AdvisorDashboard} />
              <Route path="/home" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <br></br>
              <Footer />
            </div>
          )}
        </div>
      </Router>
    )
  }
};

export default App;