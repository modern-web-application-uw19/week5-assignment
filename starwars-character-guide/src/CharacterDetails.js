import React from 'react';
import { Link } from 'react-router-dom';

export default class CharacterDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            hasError: false
        };
    }

    render() {
        if (this.state.isLoading) {
            return <div>
                <div className="character-details"> Loading... </div>
                <Link className="link-back" to={'/'} >&lt; Back</Link>    
            </div>;
        }

        const character = this.state.data;
        return <div>
            <div className="character-details">
                <div className="character-details-name">{character.name}</div>
                <div className="character-details-gender">Gender: {character.gender}</div>
                <div className="character-details-hair-color">Hair Color: {character.hair_color}</div>
                <div className="character-details-homeworld">Homeworld: {character.homeworld}</div>
            </div>
            <Link className="link-back" to={'/'} >&lt; Back</Link>
        </div>;
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                fetch(data.homeworld)
                    .then(response => response.json())
                    .then(homeworld => {
                        data.homeworld = homeworld.name;
                        this.setState({
                            data: data,
                            isLoading: false
                        });
                    })
                    .catch(error => {
                        this.setState({
                            hasError: true,
                            isLoading: false
                        });
                    });
            })
            .catch(error => {
                this.setState({
                    hasError: true,
                    isLoading: false
                });
            });
    }
}