import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          data: {},
          isLoading: true,
          hasError: false
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.setState({
              data: data.results,
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
        
        const characters = this.state.data
            .map((character, idx) => {
                return (
                    <li key={idx}>
                        <Link to={`/character/${character.id}`}>
                            <h2>{character.name}</h2>
                            <img src={character.image} alt={character.name} />
                        </Link>
                    </li>
                );
            });

        return (
            <div className="HomePage">
                <h1>All Rick and Morty Characters</h1>
                <ul>
                    {characters}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {
    characters: PropTypes.object
}

export default Home;