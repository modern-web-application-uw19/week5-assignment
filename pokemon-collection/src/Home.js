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
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20/';
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
              <h2>{pokemon.name}</h2>
              
            </li>
        )
      });

    return (
      <div>
        <ul>
          {pokemonSpecies}
        </ul>
      </div>
    );
  }
}
