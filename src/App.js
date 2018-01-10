import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

if (process.env.NODE_ENV !== 'production') {
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
        </div>
      </Router>
    );
  }
}

export default App;
