import React from 'react';
// import _data from './data.json';
import _data from 'https://swapi.co/api/';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
              data: this.state.data.results, 
              // ^ Not sure how to get that working ^
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
        if (this.state.isLoading) {
            return <div>Loading ...</div>
        }      
        if (this.state.hasError){
            return <div>ERROR, try again</div>
        }
        const characterList = Object.keys(this.state.data.results)
            .map((person, idx) => {
                const charUrl = `/detail/${idx}`;
                return (
                    <li key={idx}>
                        <a href={charUrl}>{this.state.data.results[person].name}</a>
                    </li>
                );
            });
        
        
        return(
            <div>
                <h1>Characters</h1>
                <ul>
                    {characterList}
                </ul>
            </div>
        );
    }
}