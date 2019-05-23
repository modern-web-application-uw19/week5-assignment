import React from 'react'
import Url from './characters.js'

class Character extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          character: [],
          isLoading: true,
          fetchUrl: Url
        }
    }
   
      componentDidMount(){
        fetch(this.props.fetchUrl) 
          .then(response => response.json())
          .then(data => {
            this.setState({
                character: data,
                isLoading: false,
                hasError: false
              });
          }).catch(error =>{
            this.setState({
              hasError: true,
              isLoading: false
            });
          });
      }
        
  render(){
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    if (this.state.hasError){
      return <div>The page did not load correctly!</div>
    }
    return(
      <div>
        <div>
        <div>{this.state.character.name}</div>
          <div>Height: {this.state.character.height}</div> 
          <div>Mass: {this.state.character.mass}</div>
          <div>Hair Color: {this.state.character.hair_color}</div>
          <div>Eye Color: {this.state.character.eye_color}</div> 
          <div>Birth Year: {this.state.character.birth_year}</div>
        </div>
      </div>
      );
  }
}

export default Character;