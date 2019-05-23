import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <div key={idx}>
                    <Link to={`/character/${character.id}`}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} />
                    </Link>
                    </div>
                );
            })

        return (
          <div>
              <h1>Characters of Rick and Morty</h1>
              <div className='container'>
                {characters}
              </div>
          </div>
        );
      }

}

export default Home;