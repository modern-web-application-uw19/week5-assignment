import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterItem extends Component {
    render() {
        return (
            <div className="dets-row">
                <span className="char-item">{this.props.characterItem}</span>
            </div>
        )
    }
}

CharacterItem.propTypes = {
    characterItem: PropTypes.string
  };
