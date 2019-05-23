import React from 'react';
// import PropTypes from 'prop-types';

import CharacterListItem from './CharacterListItem';
import data from './characterlist.json';

export default class CharacterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            hasError: false
        };
    }
    
    render() {
        if (this.state.isLoading) {
            return <div> Loading... </div>;
        }

        const characters = this.state.data.results;
        const charItems = characters.map((char, i) => <CharacterListItem character={char} key={i} />);
        return <div className="character-list">
            {charItems}
        </div>;
    }

    componentDidMount() {
        // fetch('https://swapi.co/api/people')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             data: data,
        //             isLoading: false
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             hasError: true,
        //             isLoading: false
        //         });
        //     });
        this.setState({
            data: data,
            isLoading: false
        });
    }
}