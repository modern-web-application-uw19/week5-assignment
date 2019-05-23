import React from 'react';
import PropTypes from 'prop-types';

export default class CharacterListItem extends React.Component {
    
    render() {
        const character = this.props.character;
        const gender = character.gender === 'n/a' ? '' : character.gender;
        return <div className="character-list-item">
            <div className="character-list-item-gender">{gender}</div>
            <div className="character-list-item-name">{character.name}</div>
        </div>;
    }
}

CharacterListItem.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        mass: PropTypes.string.isRequired,
        hair_color: PropTypes.string.isRequired,
        skin_color: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        homeworld: PropTypes.string.isRequired,
        films: PropTypes.arrayOf(PropTypes.string).isRequired,
        species: PropTypes.arrayOf(PropTypes.string).isRequired,
        vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
        starships: PropTypes.arrayOf(PropTypes.string).isRequired,
        created: PropTypes.string,
        edited: PropTypes.string,
        url: PropTypes.string.isRequired
    }).isRequired
};