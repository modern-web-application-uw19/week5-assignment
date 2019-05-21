import React from 'react';
import LinkButton from './LinkButton'

class CharacterDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charData: {
                films: [],
                species: [],
                vehicles: [],
                starships: []
            }
        }
    }

    componentDidMount() {
        const idx = this.props.match.params.id;
        fetch(`https://swapi.co/api/people/${idx}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    charData: data
                });
            })
            .catch(error => {
                this.setState({
                    hasError: true,
                    isLoading: false
                });
            });
    }

    render() {

        return (
            <div className="card">
                <div><LinkButton to='/'>HOME</LinkButton></div>
                <div className="b">{this.state.charData.name}</div>
                <div className="row">
                    <div className="column">
                        <div>Height: {this.state.charData.height}</div>
                        <div>Mass: {this.state.charData.mass}</div>
                        <div>Birth year: {this.state.charData.birth_year}</div>
                        <div>Gender: {this.state.charData.gender}</div>
                        <div></div>
                    </div>
                    <div className="column">
                        <div>Hair color: {this.state.charData.hair_color}</div>
                        <div>Skin color: {this.state.charData.skin_color}</div>
                        <div>Eye color: {this.state.charData.eye_color}</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        {this.state.charData.films.length > 0 ? <div>Films:
                            <ul>
                                {this.state.charData.films.map(film => (
                                    <div key={film}><a href={film}>film</a></div>
                                ))}
                            </ul>{}
                        </div> : ''}
                        {this.state.charData.species.length > 0 ? <div>Species:
                            <ul>
                                {this.state.charData.species.map(species => (
                                    <div key={species}><a href={species}>species</a></div>
                                ))}
                            </ul>{}
                        </div> : ''}
                    </div>
                    <div className="column">
                        {this.state.charData.vehicles.length > 0 ? <div>Vehicles:
                                <ul>
                                {this.state.charData.vehicles.map(vehicle => (
                                    <div key={vehicle}><a href={vehicle}>vehicle</a></div>
                                ))}
                            </ul>{}
                        </div> : ''}
                            {this.state.charData.starships.length > 0 ? <div>Starships:
                                <ul>
                                {this.state.charData.starships.map(starship => (
                                    <div key={starship}><a href={starship}>starship</a></div>
                                ))}
                            </ul>{}
                        </div> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterDetails;