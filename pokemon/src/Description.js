import React from 'react';
import ShortDesc from './ShortPokemonDesc';
class Description extends React.Component{
    
    
    
    render(){

        if(!this.props.character)
            return(
                <div style={{display:'hidden'}}></div>
                
            )

        else{
            console.log(this.props.character.abilities.length);
            console.log(this.props.character.abilities);
            
            
            return(
                
                <div className='desc'>
                    <div style={{fontSize:'24px', textAlign:'center',paddingBottom:'10px',paddingTop:'10px',marginBottom:'10px'}}>
                        {this.props.character.species.name}
                    </div>
                    <div>
                        
                        <ul>
                            <li><img src={this.props.character.sprites.front_default} alt='front'/></li>
                            <li><img src={this.props.character.sprites.back_default} alt='back'/></li>
                            <li><img src={this.props.character.sprites.front_shiny} alt='shiny front'/></li>
                            <li><img src={this.props.character.sprites.back_shiny} alt='shiny back'/></li>
                            <li style={{textAlign:'center',marginTop:'40px',marginLeft:'15px'}}><span style={{fontWeight:'bold'}}>id:</span>  {this.props.character.id}</li>
                            <li style={{textAlign:'center',marginTop:'40px',marginLeft:'15px'}}><span style={{fontWeight:'bold'}}>Abilities</span>{this.props.character.abilities.map((ability, index)=>{
                                return(
                                    <p style={{textAlign:'center', marginTop:'0', marginBottom:'0',padding:'0'}} key={index}>{ability.ability.name}</p>
                                );
                            })}
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
        
    }
}
export default Description;