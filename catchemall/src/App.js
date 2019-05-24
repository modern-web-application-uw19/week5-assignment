import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

let pokeNumber = 1;

const pokeTopTen = function () {
  for (let i = 0; i < 10; i++) {
    pokeNumber++;
  }
 } 

const pokeNameGetter = function(poke) { 
  return poke.forms[0].name;
}


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.hasError) {
      return <div>ERROR, please reload and try again</div>;
    }

    const names = Object.keys(this.state.data)
      .map((names, idx) => <li key={idx}>{names}</li>);


    return (
      <div>
        <ul>
          {pokeNameGetter(this.state.data)}
        </ul>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="App">

    </div>
  );
}

function NotFound() {
  return <h1>404</h1>
}

function TheRouter() {
  return (
    <div>
      <Router>
        <Link to="/">Home </Link>
        <Link to="/pokemon/:name">Pokemon</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:name" component={Pokemon} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default TheRouter;
