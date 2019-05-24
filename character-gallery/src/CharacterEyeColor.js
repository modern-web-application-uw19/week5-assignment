import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterEyeColor extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Eye Color:</span>
                <span className="dets-val">{this.props.characterEyeColor}</span> 
            </span>
        )
    }
}

CharacterEyeColor.propTypes = {
    characterEyeColor: PropTypes.string
  };