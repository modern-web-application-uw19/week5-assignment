import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterHeight extends Component {
    render() {
        return (
            <span>
                <span className="dets-lbl">Height:</span>
                <span className="dets-val">{this.props.characterHeight}</span><span className="dets-meas">cm</span>
            </span>
        )
    }
}

CharacterHeight.propTypes = {
    characterHeight: PropTypes.string
  };