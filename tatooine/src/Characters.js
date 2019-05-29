import React from 'react';
import _data from './data.json';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: _data,
            isLoading: false,
            hasError: false
        }
    }

    // componentDidMount() {
    //     fetch(_data)
    //       .then(response => response.json())
    //       .then(data => {
    //         this.setState({ //render() fn is called when you setState.
    //           data: data.name, //filter JSON down to what you actually need
    //           isLoading: false
    //         });
    //       })
    //       .catch(error => {
    //         this.setState({
    //           hasError: true,
    //           isLoading: false
    //         });
    //       });
    // }
    
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