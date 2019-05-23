import React, { Component } from 'react';
import none from '../none.png';
export default class Details extends Component {
    state = {
        abilities: [],
        baseXP: 0,
        height: 0,
        heldItems: [],
        id: 0,
        locations:"",
        moves: [],
        name: "",
        order:"",
        species: "",
        sprites:[],
        stats:[],
        types:[],
        weight:0,
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/'+this.props.name)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    abilities: data.abilities,
                    baseXP: data.base_experience,
                    height: data.height,
                    heldItems: data.held_items,
                    id: data.id,
                    locations:data.location_area_encounters,
                    moves: data.moves,
                    name:data.name,
                    order:data.order,
                    species: data.species,
                    sprites:data.sprites,
                    stats:data.stats,
                    types:data.types,
                    weight:data.weight,
                });
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {
        let abilitiesList = this.state.abilities.map((ability,idx) => {
            return ( <li key={"a"+idx}>{ability.ability.name}</li> )
        });

        let statsList = this.state.stats.map((stat,idx) => {
            return ( <li key={"s"+idx}>{stat.stat.name}: {stat.base_stat}</li> )
        });

        let typesList = this.state.types.map((type,idx) => {
            switch(type.type.name) {
                case "bug": return ( <span key={"t"+idx} role="img" aria-label="Bug type">🐛</span> );
                case "fire": return ( <span key={"t"+idx} role="img" aria-label="Fire type">🔥</span> );
                case "flying": return ( <span key={"t"+idx} role="img" aria-label="Bird type">🐦</span> );
                case "grass": return ( <span key={"t"+idx} role="img" aria-label="Grass type">🌱</span> );
                case "normal": return ( <span key={"t"+idx} role="img" aria-label="Normal type">⚪</span> );
                case "poison": return ( <span key={"t"+idx} role="img" aria-label="Poison type">☠️</span> );
                case "water": return ( <span key={"t"+idx} role="img" aria-label="Water type">🌊</span> );
                default: return ( <span key={"t"+idx}>{type.type.name}</span> );
            }
        });

        return (
            <div>
                <h1>{this.state.name} (#{this.state.id})</h1>

                <img alt={"Back default for " + this.state.name} src={this.state.sprites.back_default || none} />
                <img alt={"Front default for " + this.state.name} src={this.state.sprites.front_default || none} />
                
                <img alt={"Back female for " + this.state.name} src={this.state.sprites.back_female || none} />
                <img alt={"Front female for " + this.state.name} src={this.state.sprites.front_female || none} />

                <img alt={"Back shiny for " + this.state.name} src={this.state.sprites.back_shiny || none} />
                <img alt={"Front shiny for " + this.state.name} src={this.state.sprites.front_shiny || none} />
                <img alt={"Back shiny female for " + this.state.name} src={this.state.sprites.back_shiny_female || none} />
                <img alt={"Front shiny female for " + this.state.name} src={this.state.sprites.front_shiny_female || none} />
                <hr/>
                <div><h2>Base XP</h2><span>{this.state.baseXP}</span></div>
                <div><h2>Height</h2><span>{this.state.height}</span></div>
                <div><h2>Weight</h2><span>{this.state.weight}</span></div>
                <div><h2>Types</h2><span>{typesList}</span></div>
                <div><h2>Locations</h2><span>{this.state.locations}</span></div>
                <hr/>
                <h2>Abilities</h2><ul>{abilitiesList}</ul>
                <h2>Stats</h2><ul>{statsList}</ul>
            </div>
        );
    }
}