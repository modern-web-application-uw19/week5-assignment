import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Characters from './Characters';
import CharacterDetail from './Details';
import './Characters.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/">The Characters of Star Wars</Link>

        <Switch>
          <Route exact path="/" component={Characters} />
          <Route 
            path="/detail/:id"
            render={(props) => <CharacterDetail {...props} />} />
        </Switch>
      </Router>
    );
  } 
}

export default App;