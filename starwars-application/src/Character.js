import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Character extends Component{
	
    constructor(props) {
		
        super(props);

        this.state = {
          data: {},
          isLoading: true,
          hasError: false
        }
    }

    componentDidMount() {
		
        const id = this.props.match.params.id;
		
        fetch(`https://swapi.co/api/people/${id}/`)
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
            return <div>Loading Data...</div>;
        }

        if (this.state.hasError) {
            return <div>Unable to load, please try again!</div>;
        }

        const data = this.state.data;

        return (
            <div className="CharacterPage">
                <div key={data.name}>
                    <h1>{data.name}</h1>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    <p>Hair Color: {data.hair_color}</p>
                    <p>Eye Color: {data.eye_color}</p>
                    <p>Birth Year: {data.birth_year}</p>
					<p>Gender: {data.gender}</p>
                </div>
				<Link to="/">Back to Home Page</Link>
            </div>
        );
    }
}

Character.propTypes = {
    id: PropTypes.number,
    detail: PropTypes.object
}

export default Character;
