import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      facts: {},
      types: [],
      abilities: [],
      image: ''
    }
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(pokemon => {
        this.setState(prevState => {
          return {
            facts: pokemon,
            abilities: pokemon.abilities,
            types: pokemon.types,
            image: pokemon.sprites.front_default
          }
        });
      })
  }

  render() {
    const listOfTypes =
      this.state.types.map((entry, idx) => {
        return (
          <ListGroup.Item key={idx}>{entry.type.name}</ListGroup.Item>
        );
      });

    const listOfAbilities =
      this.state.abilities.map((entry, idx) => {
        return (
          <ListGroup.Item key={idx}>{entry.ability.name}</ListGroup.Item>
        );
      });

      const height = (this.state.facts.height/10).toFixed(1);
      const weight = (this.state.facts.weight/10).toFixed(1);

    return (
      <div>
        <h4>
          <Link to="/">Home</Link>
        </h4>
        <hr />
        <Card className="pokemonCard">
          <Card.Header className="pokemonName">{this.state.facts.name}</Card.Header>
          <img className="spriteImg" src={this.state.image} alt={this.state.facts.name}></img>
          <ListGroup variant="flush">
            <ListGroup.Item>Height: {height} m</ListGroup.Item>
            <ListGroup.Item>Weight: {weight} kg</ListGroup.Item>
            <ListGroup.Item>Types:<ListGroup>{listOfTypes}</ListGroup></ListGroup.Item>
            <ListGroup.Item>Abilities:<ListGroup>{listOfAbilities}</ListGroup></ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default Pokemon;