import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterGender extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Gender:</span>
                <span className="dets-val">{this.props.characterGender}</span>
            </span>
        )
    }
}

CharacterGender.propTypes = {
    characterGender: PropTypes.string
  };