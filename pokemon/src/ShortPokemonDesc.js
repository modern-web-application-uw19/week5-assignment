import React from 'react';
import './HeaderBar.css';

class ShortPokemonDesc extends React.Component{
 
    render(){
        const items = this.props.value.pokemon.url.split('/');
        let count = items.length;
        let id = items[count - 2];
        
        return(
            <div className='pokemonDesc' onClick={(e)=> this.props.handleClick(e, id)}>
                {this.props.value.pokemon.name}
            </div>
            
        );
    }
}
export default ShortPokemonDesc;