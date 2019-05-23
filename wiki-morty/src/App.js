import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Detail from './components/Detail/Detail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/characters" key="charcomp" render={props => (
                <Overview 
                  title="Characters"
                  endpoint="https://rickandmortyapi.com/api/character/"
                />
                )} 
              /> 
              <Route exact path="/locations" key="loccomp" render={props => (
                <Overview 
                  title="Locations"
                  endpoint="https://rickandmortyapi.com/api/location/"
                />
                )} 
              /> 
              <Route exact path="/episodes" key="epicomp" render={props => (
                <Overview 
                  title="Episodes"
                  endpoint="https://rickandmortyapi.com/api/episode/"
                />
                )} 
              /> 
              <Route path={`${/characters/}:id`} key={`char`} component={Detail} />
              <Route path={`${/locations/}:id`} component={Detail} />
              <Route path={`${/episodes/}:id`} component={Detail} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
