import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './PokemonCell.css';

export default class PokemonCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonData: {},
      imgUrl: ""
    }
  }

  static propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  }
  
  componentDidMount() {
    fetch(this.props.pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          pokemonData: data,
          imgUrl: data.sprites.front_default
        })
      })

      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        });
      });
  }

  render() {
    let style = { backgroundImage: `url(${this.state.imgUrl})`};
    return (
      <div className="pokeCell">
        <button className="pokeCellImg" style={style}>
          <Link to={`/${this.state.pokemonData.name}`} className="buttonText">{this.state.pokemonData.name}</Link>
        </button>
      </div>
    )
  }
}