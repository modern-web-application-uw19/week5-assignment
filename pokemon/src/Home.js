import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    for (let i = 1; i <= 150; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => {
          return response.json();
        })
        .then(pokemon => {
          this.setState(prevState => {
            return {
              data: [...prevState.data, { pokemon: pokemon, image: pokemon.sprites.front_default }],
              isLoading: false
            }
          });
        })
        .catch(error => {
          this.setState({
            hasError: true,
            isLoading: false
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    if (this.state.hasError) {
      return <div>ERROR, please reload and try again</div>
    }

    return (
      <div>
        <h4>
          <Link to="/">Home</Link>
        </h4>
        <hr />
        <h2>Pokemon App</h2>
        <p>Click on a pokemon to learn more!</p>
        <ul>
          {this.state.data.map(result => {
            return (
              <li key={result.pokemon.id}>
                <Link to={`/pokemon/${result.pokemon.id}`}>
                  <img className="spriteImgHome" src={result.image} alt={result.pokemon.name}></img>
                  {result.pokemon.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default Home;