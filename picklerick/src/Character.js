import React, { Component } from 'react';
import {CardColumns,Card, CardDeck, CardGroup, CardImg, ListGroup, ListGroupItem, Button,Jumbotron} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {  Link} from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

const FA = require('react-fontawesome');


class Character extends Component{

    render() {

        const c = this.props.character;

        return (

            <Link to={`/details/${c.id}`}>
                <Card style={{width:'18em'}} >

                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <Card.Img variant="bottom"  src={c.image}/>
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

export default Character;
