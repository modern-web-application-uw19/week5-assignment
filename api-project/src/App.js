import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import CharacterList from './CharacterList';
import CharacterPage from './CharacterPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/"><CharacterList /></Route>
            <Route 
              path="/character/:id" 
              component={CharacterPage} 
              className="list-page" 
            />
          </Switch>
        </Router>
      </div>
  );
}
}

