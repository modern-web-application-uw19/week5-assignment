import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.css';

export default class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonData: {},
      imgUrl: ""
    };
    this.getStats = this.getStats;
  }

  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
  }

  getStats() {
    if (Object.keys(this.state.pokemonData).length > 0) {
      return (
        <ul className="pokeStats">
          <li>{this.state.pokemonData.stats[0].stat.name}: {this.state.pokemonData.stats[0].base_stat}</li>
          <li>{this.state.pokemonData.stats[1].stat.name}: {this.state.pokemonData.stats[1].base_stat}</li>
          <li>{this.state.pokemonData.stats[2].stat.name}: {this.state.pokemonData.stats[2].base_stat}</li>
          <li>{this.state.pokemonData.stats[3].stat.name}: {this.state.pokemonData.stats[3].base_stat}</li>
          <li>{this.state.pokemonData.stats[4].stat.name}: {this.state.pokemonData.stats[4].base_stat}</li>
        </ul>
      )
    } else {
      return "just one sec..."
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          pokemonData: data,
          imgUrl: data.sprites.front_default
        })
        this.dataReady=true;
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        });
      });
  }

  componentWillMount() {
    this.dataReady=false;
  }
  
  render() {
    let style = {width: 300};
    return (
      <div className="pokeCard">
        <h1 className="pokeName">{this.props.name}</h1>
        <img className="pokeImage" src={this.state.imgUrl} style={style}></img>
        {this.getStats()}
      </div>
    );
  }
}