import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Character Guide</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route path="/character/:id" component={CharacterDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
