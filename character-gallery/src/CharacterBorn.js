import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterBorn extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Birth Year:</span>
                <span className="dets-val">{this.props.characterBorn}</span> 
            </span>
        )
    }
}

CharacterBorn.propTypes = {
    characterBorn: PropTypes.string
  };