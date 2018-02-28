import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './home/Home'
import Sidebar from './home/Sidebar'
import ArmyIndex from './army/ArmyIndex'
import MessageIndex from './messages/MessageIndex'

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      loggedIn: false
    }

    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token, loggedIn:true });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token, loggedIn:true });
    }
  }

  logout(){
    this.setState({ sessionToken: '', loggedIn: false});
    localStorage.removeItem('token');
  }

  protectedViews() {
//SWITXH TAKE OUT IF ELSE <ROUTE></ROUTE> 
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Route path='/' exact={true}>
          <MessageIndex sessionToken={this.state.sessionToken} />
        </Route>
      )
    } else {
      return (
        <Route path="/" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout} loggedIn={this.state.loggedIn}/> 

          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
