import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import StarWarsItem from './components/StarWarsItem';

class App extends React.Component {

render(){

  return (
    <div>
      <Router>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/StarWarsShips" component={Home} />
         <Route path ="/StarWarsItem/:id" component={StarWarsItem} />
      </Switch>
      </Router>
    </div>
  )
}
}

export default App;