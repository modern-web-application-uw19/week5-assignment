import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import CharacterInfo from './CharacterInfo'

function App() {
  return (
    <div className="App-header">
      <Router >
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path="/character/:id" component={CharacterInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
