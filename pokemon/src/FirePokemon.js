import React from 'react';
import ShortDesc from './ShortPokemonDesc';
import './HeaderBar.css';
import Description from './Description';


class FirePokemon extends React.Component{
    constructor(props){
        super(props);
        const {params} = this.props.match;
        
        this.state = {
            isLoading: true,
            pokemonList:[],
            indPokemon:'',
            indPokemonId: params.id == null? null: params.id,
            error: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    fetchIndPokemon(id){
        //const id = this.state.indPokemonId;
        console.log(this.state.indPokemonId);
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        console.log(url);
        fetch(url)
        .then(response=> response.json())
        .then(data=>
            this.setState({
                indPokemon: data
            })
        )
        .catch(error=> this.setState({error:error}));
    };
    
    fetchPokemon(){
        fetch('https://pokeapi.co/api/v2/type/10/')
        .then(response=> response.json())
        .then(data=> 
            this.setState({
                pokemonList: data.pokemon,
                isLoading: false
            })
            
        )
        .catch(error=> this.setState({error, isLoading:false}));
    };

    handleClick(event, id){
        event.preventDefault();
        this.setState({
            indPokemonId: id
        })
        this.props.history.push(`/fire/${id}`);
        this.fetchIndPokemon(id);
    };

    render(){
        const {isLoading, pokemonList, indPokemon, indPokemonId, error} = this.state;
        
        if(!isLoading){
            return(
                <div>
                    <div className='fireNameType nameType' >
                        Fire Pokemon
                    </div>
                    
                    <Description character={indPokemon}/>
                    {pokemonList.map((pokemon, idx)=>
                        <ShortDesc value={pokemon} key={idx} handleClick={this.handleClick}/>)}
                    
                </div>
            );
        }
        else{
            return(
                <div>
                    <h3>Loading...</h3>}
                </div>
            );
        }
    }
    componentDidMount() {
        if(this.state.pokemonList.length === 0){
            this.fetchPokemon();
        }
        if(this.state.indPokemonId){
            const id = this.state.indPokemonId;
            this.fetchIndPokemon(id);
        }
    }
}



export default FirePokemon;