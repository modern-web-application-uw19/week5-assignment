import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import PokemonList from './PokemonList';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={PokemonList} />
          </Switch>
        </Router>
      </div>
    );
  }
}
