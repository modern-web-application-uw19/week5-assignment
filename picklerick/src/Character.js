import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {  Link} from 'react-router-dom';

class Character extends Component{

    render() {

        const c = this.props.character;

        return (

            <Link to={`/details/${c.id}`}>
                <Card style={{width:'16em'}} >

                    <Card.Body>
                        <Card.Subtitle>{c.name}</Card.Subtitle>
                        <Card.Img variant="bottom"  src={c.image}/>
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

Character.propTypes = {
    character: PropTypes.object.isRequired
};

export default Character;
