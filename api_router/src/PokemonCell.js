import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './PokemonCell.css';

export default class PokemonCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      imgUrl: "",
      stats: {},
      isLoading: true,
      hasError: false
    }
  }

  static propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    }),
    handleOnClick: PropTypes.func
  }

  componentDidMount() {
    fetch(this.props.pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({
          id: data.id,
          imgUrl: data.sprites.front_default,
          stats: data.stats,
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
    let style = { backgroundImage: `url(${this.state.imgUrl})`};
    return (
      <div>
        <button className="pokemon_cell_img" style={style} onClick={() => this.props.handleOnClick(this.state.id)}>{this.props.pokemon.name}</button>
      </div>

    )
  }
}