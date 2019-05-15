import React from 'react';
import './App.css';
import Character from './Character';
import PropTypes from 'prop-types';

class Characters extends React.Component{

    render() {

        let characters;
        if (this.props.isLoading){
            characters=<li>Loading...</li>
        }
        else{
            characters = this.props.characters.map( (c,idx) => <Character key={c.id}
                                                                          id={c.id}
                                                                          character={c}
                                                                          onClick={this.props.onSelect}
            />);
        }

        return (



            <div>

                <ul>
                    {characters}
                </ul>
            </div>
        )
    }
}

export default Characters;
