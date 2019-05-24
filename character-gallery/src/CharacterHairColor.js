import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterHairColor extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Hair Color:</span>
                <span className="dets-val">{this.props.characterHairColor}</span>
            </span>
        )
    }
}

CharacterHairColor.propTypes = {
    characterHairColor: PropTypes.string
  };
