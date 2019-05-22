import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class CharacterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            species: '',
            status: '',
            origin: '',
            gender: '',
            img: '',
        }
    }
 
    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(characterDetails => {
            this.setState({
                name: characterDetails.name,
                species: characterDetails.species,
                status: characterDetails.status,
                origin: characterDetails.origin.name,
                gender: characterDetails.gender,
                img: characterDetails.image,
            });
        })
    }
 
    render() {
        return(
            <div>
                <h1 className="character-page-name">{this.state.name}</h1>
                <img src={this.state.img} className="character-page-img"/>
                <ul className="character-details">
                    <li className="details-list-item">{`Species: ${this.state.species}`}</li>
                    <li className="details-list-item">{`Status: ${this.state.status}`}</li>
                    <li className="details-list-item">{`Origin: ${this.state.origin}`}</li>
                    <li className="details-list-item">{`Gender: ${this.state.gender}`}</li>
                </ul>
            </div>
        );
    }
}

export default CharacterPage;