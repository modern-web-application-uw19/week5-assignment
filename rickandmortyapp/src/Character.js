import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Character extends Component {
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
        
        const detail = this.state.data;
    
        return (
            <div className="CharacterPage">
                <Link to="/">Back to All Characters</Link>
                <div key={detail.name}>
                    <h1>{detail.name}</h1>
                    <img src={detail.image} alt={detail.name} />
                    <p>Status: {detail.status}</p>
                    <p>Species: {detail.species}</p>
                    <p>Gender: {detail.gender}</p>
                    <p>Origin: {detail.origin.name}</p>
                    <p>Location: {detail.location.name}</p>
                </div>
            </div>
        );
    }
}

Character.propTypes = {
    characterID: PropTypes.number,
    detail: PropTypes.object
}

export default Character;