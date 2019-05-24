import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

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

// Displays a specific character's information
// Displays 4-5 facts about the character
// Displays the character image.
// Get a single character:  https://rickandmortyapi.com/api/character/2
class Details extends React.Component {
  render() {
    return JSON.stringify(this.props.match.params);
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
        </Router>
      </div>
    )
  }
}

export default App;
