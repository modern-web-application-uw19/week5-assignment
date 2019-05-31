import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
// } from 'react-router-dom';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {},
          isLoading: true,
          hasError: false
        }
    }

    componentDidMount() {
        // TODO edit URL
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.id)
          .then(response => {
            return response;
        }).then(res => {
            //console.log(res);
            return res.json();
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
        console.log(this.state.data);
        });}

        render (){
            if (this.state.isLoading) {
                return <div>Loading...</div>;
            }
    
            if (this.state.hasError) {
                return <div>ERROR, please reload and try again</div>;
            }
        const data = this.state.data;

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const pokemonTypes = data.types
            .map((typeArray, id) => 
                {return (
                    <li idx={id} key={id}>
                        {capitalizeFirstLetter(typeArray.type.name)}
                    </li>
                )}
            )

        const pokemonAbilities = data.abilities
            .map((abilityArray, id) => 
                {return (
                    <li idx={id} key={id}>
                        {capitalizeFirstLetter(abilityArray.ability.name)}
                    </li>
                )}
            )

        const pokemonStats= data.stats
            .map((statArray, id) => 
                {return (
                    <li idx={id} key={id}>
                        {capitalizeFirstLetter(statArray.stat.name)}  {statArray.base_stat}
                    </li>
                )}
            )

        return (
            <div>
                <img src={data.sprites.front_default} alt={data.name} />
                <p>No. {data.id}</p>
                <h4>{capitalizeFirstLetter(data.name)}</h4>
                <p>HT {data.height}</p>
                <p>WT {data.weight} lb</p>
                <ul>{pokemonTypes}</ul>
                <ul>{pokemonAbilities}</ul>
                <ul>{pokemonStats}</ul>
        </div>
        );
        
    }
 }

export default Pokemon;
