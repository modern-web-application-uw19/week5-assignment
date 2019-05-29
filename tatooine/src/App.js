import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/">Characters</Link>

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
