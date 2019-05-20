import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component{
	
    constructor(props) {
		
        super(props);

        this.state = {
          data: {},
          isLoading: true,
          hasError: false
        }
    }
	
	componentDidMount() {
		
        fetch('https://swapi.co/api/people/')
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
            return <div>Loading Data...</div>;
        }

        if (this.state.hasError) {
            return <div>Unable to load, please try again!</div>;
        }

        const characterList = this.state.data
            .map((character, idx) => {
                return (
                    <li key={idx}>
                        <Link to={`${(character.url).replace("https://swapi.co/api/", "")}`}>
                            <h3>{character.name}</h3>
                        </Link>
                    </li>
                );
            });

        return (
            <div className="HomePage">
                <h1>Star Wars Characters</h1>
                <ul>{characterList}</ul>
            </div>
        );
    }
}

Home.propTypes = {
    characters: PropTypes.object
}

export default Home;
