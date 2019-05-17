import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Detail from './components/Detail/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" render={props => (
            <Overview 
              title="Characters"
            />
            )} 
          /> 
          <Route exact path="/locations" render={props => (
            <Overview 
              title="Locations"
            />
            )} 
          /> 
          <Route exact path="/episodes" render={props => (
            <Overview 
              title="Episodes"
            />
            )} 
          /> 
          <Route path={`${/characters/}:id`} component={Detail} />
          <Route path={`${/locations/}:id`} component={Detail} />
          <Route path={`${/episodes/}:id`} component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
