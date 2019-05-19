import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(pokemonUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
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
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        if (this.state.hasError) {
            return <div>ERROR, please reload and try again</div>;
        }

        const pokemonDetails = this.state.data;
        const pokemonName = this.capitalize(pokemonDetails.name);

        const pokemonTypes = pokemonDetails.types
            .map((type, idx) => {
                return (
                    <span key={idx}>{idx > 0 ? ', ' : ''}{this.capitalize(type.type.name)}</span>
                )
            });

        const pokemonAbilities = pokemonDetails.abilities
            .map((abilities, idx) => {
                return (
                    <span key={idx}>{idx > 0 ? ', ' : ''}{this.capitalize(abilities.ability.name)}</span>
                )
            });

        return (
            <div>
                <div className="home-link"><Link to={"/"}>Home</Link></div>
                <div className='pokemon-card'>
                    <div className="pokemon-card-name">#{pokemonDetails.id} {pokemonName}</div>
                    <img src={pokemonDetails.sprites.front_default} alt="Default" />
                    <div className="pokemon-card-details"><b>Type:</b> {pokemonTypes}</div>
                    <div className="pokemon-card-details"><b>Abilities:</b> {pokemonAbilities}</div>
                    <div className="pokemon-card-details"><b>Height:</b> {pokemonDetails.height / 10} m</div>
                    <div className="pokemon-card-details"><b>Weight:</b> {pokemonDetails.weight / 10} kg</div>
                </div>
            </div>
        );
    }
}
