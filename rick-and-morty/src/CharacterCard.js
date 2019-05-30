import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class CharacterCard extends React.Component {

    render() {
        const character = this.props.character;
        return(
            <li key={character.id} className="list-item">
                <div className="profile-img">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="content">
                    <h2>{character.name}</h2>
                    <h3>status: {character.status}</h3>
                    <Link to={`/character/${character.id}`} className="btn">Learn more</Link>
                </div>
            </li>
        )
    }
}
export default CharacterCard;