import React from 'react';
import Home from './components/home';
import Details from './components/details'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/details" component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;
