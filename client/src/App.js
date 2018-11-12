/* global $ */
import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer"
import Nav from "./components/navbar"
import { User, Advisor } from './utils/Auth';
import openSocket from 'socket.io-client';

//Pages
import Search from "./pages/Search"
import Home from "./pages/Home";
import UserDashboard from './pages/userDashboard';
import AdvisorDash from './pages/AdvisorDash';
import API from './utils/API';
import RequireSignIn from "./components/redirectComps"


class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    advisor: null,
    role: 'user',
    currentPage: "",
    advisorLoggedIn: false,
    loginError: ''
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    this.getUser()
    this.getAdvisor()
  }

  getUser = () => User.getUser()
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
  getAdvisor = () => Advisor.getUser()
    .then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        this.setState({
          advisorLoggedIn: true,
          advisor: response.data.user,
          role: 'advisor'
        });
      } else {
        this.setState({
          advisorLoggedIn: false,
          advisor: null
        });
      }
    });
  handleLogin = (user) => {
    if (this.state.role === 'user') {
      User.login(user)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            $(".open").modal('close')
            this.getUser()
          }
        })
        .catch(err => this.setState({ loginError: "username or password is incorrect" }));
    } else if (this.state.role === 'advisor') {
      Advisor.login(user)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            $(".open").modal('close')
            this.getAdvisor()
          }
        })
        .catch(err => this.setState({ loginError: "username or password is incorrect" }));
    }
  }
  handleLogout = (event) => {
    event.preventDefault();
    if (this.state.role === 'user') {
      User.logout()
        .then(response => {
          console.log(response.data);
          if (response.status === 200) {
            this.setState({
              loggedIn: false,
              user: null
            });
          }
        });
    } else if (this.state.role === 'advisor') {
      Advisor.logout()
        .then(response => {
          console.log(response.data);
          if (response.status === 200) {
            this.setState({
              advisorLoggedIn: false,
              advisor: null
            });
          }
        });
    }
  }
  handleRoleChange = event => {
    this.setState({ role: event.target.value })
  }
  render() {
    return (
      <Router>
        <div>
          <Nav
            handlePageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            handleRoleChange={this.handleRoleChange}
            role={this.state.role}
            user={this.state.user}
            advisor={this.state.advisor}
            loginError={this.state.loginError}
          />
          {this.state.loggedIn && (
            <div className="user-dash">
              <Route exact path="/" component={Home} />
              <Route path="/search" component={() => <Search loggedIn={this.state.loggedIn} getUser={this.getUser} />} />
              <Route path="/user" render={() => <UserDashboard user={this.state.user} getUser={this.getUser} />} />
              <Route path="/advisor" component={()=> <RequireSignIn type="notAdvisor"/>} />
            </div>
          )}
          {this.state.advisorLoggedIn && (
            <div className="advisor-dash">
              <Route exact path="/" component={Home} />
              <Route path="/search" component={() => <Search />} />    
              <Route path="/advisor" component={() => <AdvisorDash advisor={this.state.advisor} />} /> 
              <Route path="/user" component={()=> <RequireSignIn type="notUser"/>} />
            </div>
          )}
          {!this.state.loggedIn && !this.state.advisorLoggedIn && (
            <div>
              {/* only here for testing */}
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/user" component={()=> <RequireSignIn type="notUser"/>} />
              <Route path="/advisor" component={()=> <RequireSignIn type="notAdvisor"/>} />
            </div>
          )}
          <Footer />
        </div>
      </Router>
    )
  }
};

export default App;