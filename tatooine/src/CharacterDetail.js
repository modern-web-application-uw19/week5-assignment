import React from 'react';
import _data from './data.json';

export default class CharacterDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: _data,
            person: this.props.match.params.id,
            isLoading: false,
            hasError: false
        }
    }

    // componentDidMount() {
    //     fetch(_data)
    //       .then(response => response.json())
    //       .then(data => {
    //         this.setState({ 
    //         //   data: data.results[this.state.person], //This is not filtering for me.
    //             data: data.name,
    //             isLoading: false
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
        console.log( 'State: ', this.state.data.results[this.state.person] );
        if (this.state.isLoading) {
            return <div>Loading ...</div>
        }      
        if (this.state.hasError){
            return <div>ERROR, try again</div>
        }
        const characterDetail = Object.keys(this.state.data.results[this.state.person])
            .map((person, idx) => {
                return (
                    <ul key={idx}>
                        <li>{person}: {person[idx]}</li>
                    </ul>
                );
            });

        return(
            <article>
                <h1>Character Details</h1>
                {characterDetail}
            </article>
        );
    }
}