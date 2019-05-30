import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterPage from './CharacterPage';
import logo from './logo.png';


function character(props) {
  return (
    <div>
      
      <CharacterPage 
        id = {props.match.params.id}
      />
      <Link to="/" style={{position: 'absolute', top: 90}}>&#8810; BACK</Link>
    </div>
  )
}

function NotFound() {
  return <h1>404</h1>
}

function App() {

  return (
    <div>
      <Router>
        <div className="nav">
          <Link to="/"><img src={logo}/></Link>
        </div>

        <Switch>
          <Route exact path="/"><CharacterList /></Route>
          <Route path="/character/:id" component={character} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;