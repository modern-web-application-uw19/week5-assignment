import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
        </Router>
      </div>
    )
  }
}

export default App;
