import React from 'react';
import CharacterCard from './CharacterCard';
import CharacterList from './CharacterList';

class CharacterPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          results: {}
        };
      }
      
      componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.props.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                character: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, character } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="container details">
              <div className="profile-img">
                <img src={character.image} alt={character.name} />
              </div>
              <div className="content">
                <h1>{character.name}</h1>
                <h3>status: {character.status}</h3>
                <hr />
                <p><strong>location:</strong>  {character.location.name}</p>
                <p><strong>species:</strong>  {character.species}</p>
                <p><strong>origin:</strong>  {character.origin.name}</p>
                <p><strong>gender:</strong>  {character.gender}</p>
                
              </div>
              
            </div>
          );
        }
      }

}

export default CharacterPage;