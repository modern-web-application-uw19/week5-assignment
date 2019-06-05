import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false,
    }
  }
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
      .then(response => {
        return response.json();
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
      });
  }

  render() {

    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.hasError) {
      return <div>ERROR, please reload and try again</div>;
    }
    //const pokemonName = this.state.name;
    
    return (
      <div>
        <ul>
          {this.state.data.name}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;