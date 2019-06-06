import React from 'react';

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
            return <div>ERROR, try again</div>
        }
        console.log('State: ', this.state.data);

        const characterList = Object.keys(this.state.data)
            .map((person, idx) => {
                const charUrl = `/detail/${idx}`;
                return (
                    <li key={idx}>
                        <a href={charUrl}>{this.state.data[person].name}</a>
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