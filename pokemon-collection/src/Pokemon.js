import React from 'react';
import './App.css';
import { BrowserRouter as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount() {
        const url = this.props.url;
        fetch(url)
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

        const pokemonDataDetails = this.state.data;

        return (
            <div>
                <div className="home-card-list">
                    <h2>{this.capitalize(pokemonDataDetails.name)}</h2>
                    <img src={pokemonDataDetails.sprites.front_default} alt="Default" />
                </div>
            </div>
        );
    }
}
Pokemon.propTypes = {
    pokemon: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}
