import React from 'react';
import PropTypes from 'prop-types';

export default class Details extends React.Component {
  static propTypes = {
    foo: PropTypes.string
  }

  constructor(props){
    super(props);

    this.state = {
      data: {},
      isLoading: true
    }
  }

  componentDidMount() {
    // fetch(`https://rickandmortyapi.com/api/character/6`)
    fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => { 
      this.setState(
        {
          data: data,
          isLoading: false
        }
      )
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <p>Name: {this.state.data.name}</p>
        <p>Gender: {this.state.data.gender}</p>
        <img src={this.state.data.image} alt={this.state.data.name}/>
        <p>Location: {this.state.data.location.name}</p>
        <p>Species: {this.state.data.species}</p>
        <p>Status: {this.state.data.status}</p>
      </div>
    )
    // return JSON.stringify(this.props.match.params);
  }
}

// Displays a specific character's information
// Displays 4-5 facts about the character
// Displays the character image.
// Get a single character:  https://rickandmortyapi.com/api/character/2
