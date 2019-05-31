import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonCard from './PokemonCard.js'
import PokemonPage from './PokemonPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function NotFound() {
  return <h1>404 Error</h1>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

 render (){

    return(
      <div className="App">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/pokemon">Pokemon</Link>
          <hr />
 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/" component={PokemonPage} />
            <Route path="/pokemon/:id" component={PokemonCard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
// TODO Pokemon grid page removed. could not get map or sub-component 'Pokemon' to work
//  <Link to="/pokemon/bulbasaur">Bulbasaur</Link>

export default App;
