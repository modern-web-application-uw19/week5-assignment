import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount() {
        // const id = this.props.match.params.id;
        const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(pokemonUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    data: data.results,
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

        const pokemonSpecies = pokemonDetails
            .map((pokemon, idx) => {
                return (
                    <div className="home-card" key={idx+1}>
                        <Link to={`/pokemon/${idx + 1}`}>
                            {/* <h2>{this.capitalize(pokemon.name)}</h2> */}
                            <Pokemon key={idx+1} idx={idx+1} pokemon={pokemon} />
                        </Link>
                        
                    </div>
                )
            });

        return (
            <div className="home">
                <h1>PokeDex</h1>
                <div className="home-card-list">
                    {pokemonSpecies}
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    pokemonSpecies: PropTypes.object.isRequired
}
