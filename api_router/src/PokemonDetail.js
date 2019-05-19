import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './PokemonCell.css';

export default class PokemonDetail extends React.Component {

  componentDidMount() {
    fetch(this.props.pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
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
    return (
      <p>test</p>
    )
  }
}