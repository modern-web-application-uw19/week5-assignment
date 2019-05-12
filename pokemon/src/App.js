import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
        <Dashboard></Dashboard>
        </div>
      </div>
    );
  }
}

export default App;
