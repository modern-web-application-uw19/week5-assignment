import React from 'react';
import './Pokemon.css';
import Pokemon from './Pokemon.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
// } from 'react-router-dom';


class PokemonPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
        isLoading: true,
        hasError: false
      }
    }
  
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(response => {
            // console.log(response);
            // console.log(response.json());
            // console.log(response.json());
            // console.log(response.JSON.stringify()); // data can be `string` or {object}!
            return response;
        }).then(res => {
            // console.log(res);
            return res.json();
        })
        .then(data => {
            // console.log(data);
            // console.log(data.results[0].name);
            this.setState({
                data: data.results,
                isLoading: false
            });
            // console.log(this.state.data);
            // console.log('Success:', JSON.stringify(data))
      }); 
    };

    render (){
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        };
        if (this.state.hasError) {
            return <div>ERROR, please reload and try again</div>;
        };

        const data = this.state.data;
        const pokemonGroup = data
            .map((pokemonObject, id) => 
                {return(
                    <li idx={id} key={id}>
                        <Pokemon name={pokemonObject.name} pokeIdx={id} url={pokemonObject.url} />
                    </li>
                )}
            );

        // const pokemonTypes = data.types
        //     .map((typeArray, id) => 
        //         {return (
        //             <li idx={id} key={id}>
        //                 {capitalizeFirstLetter(typeArray.type.name)}
        //             </li>
        //         )}
        //     )
        
        return (
            <div>
                <h1>Pokemon Group</h1>
                    <ul>
                        {pokemonGroup}
                    </ul>
                <hr />                   
            </div> 
        );
    }
}
export default PokemonPage;
