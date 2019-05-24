import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Pokemon from './Pokemon.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:id" component={Pokemon} />
        </Router>
      </div>
    )
  }
}

export default App;
