import React from 'react';
import PropTypes from 'prop-types';

class Character extends React.Component {
    static propTypes = {
        name:  PropTypes.string,
        height: PropTypes.number,
        mass: PropTypes.number,
        hair_color: PropTypes.string,
        skin_color: PropTypes.string,
        eye_color: PropTypes.string,
        birth_year: PropTypes.string,
        gender: PropTypes.string,
        homeworld: PropTypes.string,
        films: PropTypes.array,
        species: PropTypes.array,
        vehicles: PropTypes.array,
        starships: PropTypes.array,
        created: PropTypes.instanceOf(Date),
        edited: PropTypes.instanceOf(Date),
        url: PropTypes.string
    }
    
    render() {
        const url = this.props.url;
        let parts = url.split('/');
        parts.pop();
        const idx = parts.pop();
        const myUrl = './character/' + idx;
        console.log(myUrl);
        return (
            <a href = {myUrl}>
                <div>
                    <div>{this.props.name}</div>
                    <div>{this.props.url}</div>
                    <hr></hr>
                </div>
            </a>
        );
    }
}

export default Character;