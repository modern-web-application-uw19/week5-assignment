import React from 'react';
import './App.css';
import { BrowserRouter as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const pokemonDetails = this.props.pokemon;

        return (
            <div>
                <div className="home-card-list">
                    <h2>{this.capitalize(pokemonDetails.name)}</h2>
                    {/* this.props.key = {this.props.idx} */}
                    {/* this.props.pokemon = {this.props.pokemon.order} */}
                    {/* <img src={this.props} alt="Default" /> */}
                </div>
            </div>
        );
    }
}
Pokemon.propTypes = {
    pokemon: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}
