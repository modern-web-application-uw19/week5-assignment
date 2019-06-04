import React from 'react';
// import _data from './data.json';
import _data from 'https://swapi.co/api/';

export default class CharacterDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.match.params.id,
            data: _data,
            isLoading: false,
            hasError: false
        }
    }

    // If I comment the below block of code, and change reference to local data, the app will work. I cannot get this to work with live API.
    componentDidMount() {
        fetch(this.state.data + 'people/')
          .then(response => response.json())
          .then(data => {
            this.setState({ 
            // data: data.results[this.state.person]
            // ^ This is not filtering for me. ^ 
                data: this.state.person,
                isLoading: false
            });
          })
          .catch(error => {
            this.setState({
              //hasError: true,
              isLoading: false
            });
          });
    }

    render() {
        console.log( 'State: ', this.state.data.results[this.state.person] );

        if (this.state.isLoading) {
            return <div>Loading ...</div>
        }      
        if (this.state.hasError){
            return <div>ERROR, try again</div>
        }

        return(
            <article>
                <h1>Character Details</h1>
                <ul>
                    <li>name: {this.state.data.results[this.state.person].name}</li>
                    <li>birth year: {this.state.data.results[this.state.person].birth_year}</li>
                    <li>hair color: {this.state.data.results[this.state.person].hair_color}</li>
                    <li>height: {this.state.data.results[this.state.person].height}</li>
                    <li>skin color: {this.state.data.results[this.state.person].skin_color}</li>
                </ul>
            </article>
        );
    }
}