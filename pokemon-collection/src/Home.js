import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
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

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.hasError) {
      return <div>ERROR, please reload and try again</div>;
    }

    


    const pokemonSpecies = this.state.data
      .map((pokemon, idx) => {
        return (
          <li key={idx}>
            <Link to={`/pokemon/${idx+1}`}>
              <h2>{this.capitalize(pokemon.name)}</h2>
            </Link>
            {/* <PokemonCard key={idx} name={pokemon.name} url={pokemon.url} /> */}
          </li>
        )
      });

    return (
      <div>
        <h1>PokeDex</h1>
        <ul>
          {pokemonSpecies}
        </ul>
      </div>
    );
  }
}
