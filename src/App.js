import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './login.js'

import './App.css';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  onUpdate() {
    this.setState({});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>My Application</h1>
            <Link to="/login">Login</Link>
          </header>
          <main>
            <Route path="/login" component={Login} />
          </main>
          <footer>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
