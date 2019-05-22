import React from 'react';
import { Link } from 'react-router-dom'
import './Characters.css'

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data.results,
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

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.hasError) {
      return <div>ERROR, please reload and try again</div>;
    }

    let characterId = this.props.match.params;
    characterId = characterId[Object.keys(characterId)[0]] - 1;
    const character = this.state.data[characterId]

    return (
      <div className='character-display'>
        <span className='character-name'>{character.name}</span>
        <img src={character.image} className='character-img' />
        <span className='character-species'>Species: {character.species}</span>
        <span className='character-status'>Status: {character.status}</span>
        <span className='character-gender'>Gender: {character.gender}</span>
        <span className='character-origin'>Origin: {character.origin.name}</span>
        <hr></hr>
        <Link to="/">Back</Link>
      </div>
      );

  }
}

export default Characters;
