import React, { Component } from 'react';
import CardGrid from '../Shared/CardGrid.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    
    const characters = fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(json => this.setState({characters: json}))
    .catch()

    const locations = fetch('https://rickandmortyapi.com/api/location/')
    .then(response => response.json())
    .then(json => this.setState({locations: json}))
    .catch()

    const episodes = fetch('https://rickandmortyapi.com/api/episode/')
    .then(response => response.json())
    .then(json => this.setState({episodes: json}))
    .catch()
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="characters">
          <h2>Characters</h2>
          <div className="row">
            {this.state.characters ? <CardGrid data={this.state.characters.results} limit={3} section="characters" /> : <div>Loading....</div>}
          </div>
          <div>
            <Link className="btn" to={'/characters'}>View All Characters</Link>
          </div>
        </div>
        <div className="locations">
          <h2>Locations</h2>
          <div className="row">
            {this.state.locations ? <CardGrid data={this.state.locations.results} limit={3} section="locations" /> : <div>Loading....</div>}
          </div>
          <div>
            <Link className="btn" to={'/locations'}>View All Locations</Link>
          </div>
        </div>
        <div className="episodes">
          <h2>Episodes</h2>
          <div className="row">
            {this.state.episodes ? <CardGrid data={this.state.episodes.results} limit={3} section="episodes" /> : <div>Loading....</div>}
          </div>
          <div>
            <Link className="btn" to={'/episodes'}>View All Episodes</Link>
          </div>
        </div>

      </div>
    );
  }
}
 
export default Home;