import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer"
import Nav from "./components/navbar"
import { User, Advisor } from './utils/Auth';

//Pages
import Search from "./pages/Search"
import Home from "./pages/Home";
import UserDashboard from './components/userDashboard';
import AdvisorDash from './pages/AdvisorDash';
import API from './utils/API';

class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    advisor: null,
    role: 'user',
    currentPage: "",
    advisorLoggedIn: false
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    this.getUser()
    this.getAdvisor()
    API.getCompanyInfo('fb');
    API.getCompanyNews('fb');
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
            this.getUser()
          }
        });
    } else if (this.state.role === 'advisor') {
      Advisor.login(user)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.getAdvisor()
          }
        });
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
            userExists={this.state.loggedIn}
            handleRoleChange={this.handleRoleChange}
            role={this.state.role}
          />
          {this.state.loggedIn && (
            <div className="user-dash">
              <Route exact path="/" component={Home} />
              <Route path="/user" component={() => <UserDashboard user={this.state.user} />} />
              <Route path="/search" component={() => <Search loggedIn={this.state.loggedIn} />} />
            </div>
          )}
          {this.state.advisorLoggedIn && (
            <div className="advisor-dash">
              <Route path="/advisor" component={() => <AdvisorDash />} />
              <Route path="/search" component={() => <Search />} />
            </div>
          )}
          {!this.state.loggedIn && (
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
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