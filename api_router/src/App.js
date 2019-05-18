import React from 'react';
import './App.css';
import CharacterPreview from './CharacterPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=3')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
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

    // const pokemons = this.state.data
    // .map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>);

    const CharacterPreviews = this.state.data.map((pokemon, idx) => {
      return (
        <CharacterPreview pokemon={pokemon} key={idx} idx={idx}/>);
      });

    return (
      <div>
        {CharacterPreviews}
      </div>
    );
  }
}

export default App;
