import React from 'react';
import './Characters.css';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            hasError: false
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
          .then(response => response.json())
          .then(result => {
            this.setState({ 
              data: result.results, 
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
            return <div>Oh no, what went wrong?</div>
        }

        const characterList = Object.keys(this.state.data)
            .map((person, idx) => {
                const charUrl = `/detail/${idx}`;
                // SUPER HACKY! Gross!
                const charNum = idx+1;
                const imgURL = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
                return (
                    <div className="characterBox" key={idx}>
                        
                        <a href={charUrl}><img src={imgURL} alt={this.state.data[person].name}></img><br></br>{this.state.data[person].name}</a>
                    </div>
                );
            });
        
        
        return(
            <div className = "big-box">
                <h1>Characters</h1>
                <div>
                    {characterList}
                </div>
            </div>
        );
    }
}