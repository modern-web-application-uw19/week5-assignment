import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonCard';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={PokemonCard} />
          </Switch>
        </Router>
      </div>
    );
  }
}
