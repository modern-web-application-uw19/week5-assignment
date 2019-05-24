import React, {Component} from 'react';
import Details from './Details';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Home extends React.Component {
  state = {
  characters: []
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(({results}) => {
      this.setState({characters: results})
    })
  }

  render() {
    return (
      <div>
        <h2>Characters</h2>
        <ul>
          {this.state.characters.map(character => {
            return (
              <li key={character.id}>
                <Link to={`/details/${character.id}`}>
                  {character.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }

// https://rickandmortyapi.com/documentation
// Get all characters:
// https://rickandmortyapi.com/api/character/

// {
//   "info": {
//     "count": 394,
//     "pages": 20,
//     "next": "https://rickandmortyapi.com/api/character/?page=2",
//     "prev": ""
//   },
//   "results": [
//     // ...
//   ]
// }
