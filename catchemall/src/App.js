import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import PokemonDetail from './PokemonDetail'

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
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
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
    const theResults = (this.state.data.results);
    const top20 = theResults
      .map((poke, idx) => <li key={idx}><Link to={`pokemon/${poke.name}`}>{poke.name}</Link></li>);

    return (
      <div>
        <ul>
          {top20}
        </ul>
      </div>
    );
  }
}

function NotFound() {
  return <h1>404</h1>
}


function TheRouter() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>

        <Switch>
          <Route exact path="/" component={Pokemon} />
          <Route path="/pokemon/:name" component={PokemonDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default TheRouter;
