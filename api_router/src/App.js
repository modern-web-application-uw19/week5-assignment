import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import PokemonCell from './PokemonCell';
import PokemonDetail from './PokemonDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data.results,
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
    
    function NotFound() {
      return <h1>404</h1>
    }
    
    const PokemonCells = this.state.data.map((pokemon, idx) => {
      return (
        <PokemonCell pokemon={pokemon} key={idx} idx={idx}/>);
      });

    function PokemonList() {
      return (
        <div>{PokemonCells}</div>
      )
    }
    
    function DetailView({ match }) {
      let url = 'https://pokeapi.co/api/v2/pokemon/' + match.params.name;
      return <PokemonDetail match={match} name={match.params.name} url={url}/>;
    }

    return (
      <div>
        <Router>
          <div className="header">
            <h1 className="headerTitle">Gotta Catch 'Em All!</h1>
            <button className="headerButton">
              <Link to="/">All Pokemon</Link>
            </button>
          </div>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route path="/:name" component={DetailView} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
