import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount() {
        const characterID = this.props.match.params.id;
        console.log(characterID)
        fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
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

        const CharacterInfo = this.state.data;

        return (
            <div>
            <Link to="/">Back to All Characters</Link>
            <div key={CharacterInfo.id}>
                <h1>{CharacterInfo.name}</h1>
                <div>Species: {CharacterInfo.species}</div>
                <div>Gender: {CharacterInfo.gender}</div>
                <div>Status: {CharacterInfo.status}</div>
                <div>Origin: {CharacterInfo.origin.name}</div>
                <div>Current Location: {CharacterInfo.location.name}</div>
            </div>
        </div>
        );
      }

}

export default CharacterInfo;