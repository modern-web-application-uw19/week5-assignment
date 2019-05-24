import React, { Component } from 'react';
import CharacterName from './CharacterName.js';
import CharacterGender from './CharacterGender.js';
import CharacterMass from './CharacterMass.js';
import CharacterHeight from './CharacterHeight.js';
import CharacterHairColor from './CharacterHairColor.js';
import CharacterEyeColor from './CharacterEyeColor.js';
import CharacterBorn from './CharacterBorn.js';
import './CharacterGallery.css';
import ReturnURL from './ReturnURL.js';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


export default class CharacterDetail extends Component {

    state = {
        characterInfo: [{}]
    };

    componentDidMount() {
        // On mount, set character to value passed in <Link to="">
        const character = this.props.match.params.character;
        // Fetch results from SWAPI for character, convert to json, set in state via characterInfo.
        fetch(`https://swapi.co/api/people/?search=${character}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    // Expecting character info to store a single object containing the details for the fetched character 
                  characterInfo: data.results
                });
            });
    }

    render() {
        return (
            <div className="site-wrap">
                <div><h1 className="site-head">star wars character gallery</h1></div>
                <div className="dets-wrap">
                    <div className="dets-row"><CharacterName characterName={this.state.characterInfo[0].name} /></div>
                    <div className="dets-row"><CharacterGender characterGender={this.state.characterInfo[0].gender} /></div>
                    <div className="dets-row"><CharacterHeight characterHeight={this.state.characterInfo[0].height} /></div>
                    <div className="dets-row"><CharacterMass characterMass={this.state.characterInfo[0].mass} /></div>
                    <div className="dets-row"><CharacterEyeColor characterEyeColor={this.state.characterInfo[0].eye_color} /></div>
                    <div className="dets-row"><CharacterHairColor characterHairColor={this.state.characterInfo[0].hair_color} /></div>
                    <div className="dets-row"><CharacterBorn characterBorn={this.state.characterInfo[0].birth_year} /></div>
                </div>
                <div><Link className="char-url" to="/"><ReturnURL /></Link></div>
            </div>
        )
    }
}

CharacterDetail.propTypes = {
    match: PropTypes.string
  };