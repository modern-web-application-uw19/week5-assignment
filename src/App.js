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
          <li><Link to="/">Return to List</Link></li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/details/:name" render={ (props) => <Details name={props.match.params.name} /> }></Route>
      </Router>
    </div>
  );
}

export default App;
