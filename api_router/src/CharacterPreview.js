import React from 'react';
import PropTypes from 'prop-types';

export default class CharacterPreview extends React.Component {

  static propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  }

  render() {
    return (
      <div>
        <a href={this.props.pokemon.url}>
          {this.props.pokemon.name}
        </a>
      </div>
    )
  }
}