import React from 'react';
import './App.css';
import Character from './Character';
import PropTypes from 'prop-types';
import {CardColumns} from "react-bootstrap";

class Characters extends React.Component{

    render() {

        let characters;
        if (this.props.isLoading){
            characters=<p>Loading...</p>
        }
        else{
            characters = this.props.characters.map( (c) => <Character key={c.id}
                                                                          id={c.id}
                                                                          character={c}
            />);
        }

        return (
            <div style={{backgroundColor:"#282c34"}}>
                <CardColumns>
                    {characters}
                </CardColumns>
            </div>
        )
    }
}

export default Characters;
