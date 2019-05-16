import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/characters" render={props => (
          <Overview 
            title="Characters"
          />
          )} 
        /> 
        <Route path="/locations" component={Overview} />
        <Route path="/episodes" component={Overview} />
        <Route path={`${/characters/}:id`} component={Detail} />
        <Route path={`${/locations/}:id`} component={Detail} />
        <Route path={`${/episodes/}:id`} component={Detail} />
      </Router>
    </div>
  );
}

export default App;
