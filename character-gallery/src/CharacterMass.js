import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterMass extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Mass:</span> 
                <span className="dets-val">{this.props.characterMass}</span><span className="dets-meas">kg</span>
            </span>
        )
    }
}

CharacterMass.propTypes = {
    characterMass: PropTypes.string
  };
