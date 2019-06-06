import React from 'react';

export default class CharacterDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            person: this.props.match.params.id,
            isLoading: false,
            hasError: false
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
          .then(response => response.json())
          .then(result => {
            this.setState({ 
                data: result.results[this.state.person],
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
            return <div>Loading ...</div>
        }      
        if (this.state.hasError){
            return <div>ERROR, try again</div>
        }
        console.log('CD,data: ', this.state.data);

        return(
            <article>
                <h1>Character Details</h1>
                <ul>
                    <li>name: {this.state.data.name}</li>
                    <li>birth year: {this.state.data.birth_year}</li>
                    <li>hair color: {this.state.data.hair_color}</li>
                    <li>height: {this.state.data.height}</li>
                    <li>skin color: {this.state.data.skin_color}</li>
                </ul>
            </article>
        );
    }
}