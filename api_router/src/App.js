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
      pokemonDtl: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=3')
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

    function handleOnClick(id) {
      console.log(id)
      fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const pokemonDtl = new PokemonDetail(data);
          this.setState({pokemonDtl});
        })
        .catch(err => console.log(err));
    }
    
    const PokemonCells = this.state.data.map((pokemon, idx) => {
      return (
        <PokemonCell pokemon={pokemon} key={idx} idx={idx} handleOnClick={handleOnClick.bind(this)}/>);
      });

    function PokemonList(props) {
      return PokemonCells;
    }
    
    return (
      <div>
        <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
