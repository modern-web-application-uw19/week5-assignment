import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }
  
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
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
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {results.map(character => (
            <CharacterCard 
              character={character}
              key={character.id}
              id={character.id}
              // onLearnMore={this.props.CharacterList(key)} 
            />
          ))}
        </ul>
      );
    }
  }
}

export default CharacterList;