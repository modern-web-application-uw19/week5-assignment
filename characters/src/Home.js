import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => { 
      this.setState({characters: data.results})
// or:
//  .then(({results}) => { 
//    this.setState({characters: results})
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

// Get all characters: https://rickandmortyapi.com/api/character/
// .then(({results} is destructuring, to extract the results array from returned json, which is:
// {
//   "info": {
//     "count": 394,
//     "pages": 20,
//     "next": "https://rickandmortyapi.com/api/character/?page=2",
//     "prev": ""
//   },
//   "results": [
//     { 
//       id: 1, 
//       name: "Rick Sanchez", 
//       status: "Alive", 
//       species: "Human", 
//       type: "", 
//       …
//     }, 
//     {...}
//   ]
// }

// https://rickandmortyapi.com/documentation
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"
