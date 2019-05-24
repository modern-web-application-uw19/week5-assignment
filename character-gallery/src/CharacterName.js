import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterName extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Name:</span>
                <span className="dets-val">{this.props.characterName}</span> 
            </span>
        )
    }
}

CharacterName.propTypes = {
    characterName: PropTypes.string
  };
