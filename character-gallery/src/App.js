import React, { Component } from 'react';
import CharacterList from './CharacterList.js';
import './App.css';
import ReturnURL from './ReturnURL.js';
import {Link} from 'react-router-dom';
import './CharacterGallery.css';

export default class App extends Component {
  state = {
    characterList: [{}]
  };

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => {
        return response.json();
      }) 
      .then(data => {
        this.setState({
          characterList: data.results
        });
      });
  }

  render() {

    return (
      <div className="site-wrap">
        <div><h1 className="site-head">star wars character gallery</h1></div>
        <CharacterList characterList={this.state.characterList}/>
        <div><Link className="char-url" to="/"><ReturnURL /></Link></div>
      </div>
    )
  }


}
