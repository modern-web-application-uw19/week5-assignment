import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Characters from './components/Characters';
import Home from './components/Home';
import CharacterData from './components/character.json';
import './Main.css'
import './components/Navigation.css'
import { Container, Row } from 'react-bootstrap';

function NotFound() {
  return <h1>404</h1>
}

function App() {
  const characterList = CharacterData.results;
  const characterLinks = characterList.map((character, idx) => {
    return <div className='character-list'>
              <Link
                key={idx}
                to={`/character/${character.id}`}>
                {character.name}
              </Link>
            </div>
  });

  return (
    <div className='app-container'>
      <div className='header'>
        <h1>Rick and Morty and Friends!</h1>
      </div>

      <Router>
        <div className='navigation'>
          {characterLinks}
        </div>
        <div className='character-container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/character/:id" component={Characters} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
